import express from 'express'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = 8000

app.use(bodyParser.json())

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

const firebaseApp = initializeApp(firebaseConfig)

app.post('/login', async (req, res) => {
  const { email, password } = req.body
  console.log({ email, password })

  try {
    const auth = getAuth(firebaseApp)
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
    const user = userCredential.user

    // Generate a Firebase ID token
    const token = await user.getIdToken()

    // Fetch data from Firestore 'users' collection using the user's uid
    const firestore = getFirestore(firebaseApp)
    const userDocRef = doc(firestore, 'users', user.uid)
    const userDocSnapshot = await getDoc(userDocRef)

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data()

      // Return response to the client
      res.json({
        success: true,
        message: 'Login successful',
        user: {
          uid: user.uid,
          email: user.email,
          indentity: userData,
        },
        token,
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'User data not found',
      })
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error signing in:', error)
      res.status(401).json({
        success: false,
        message: 'Invalid credentials',
        error: error.message,
      })
    }
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port} | http://localhost:${port}/`)
})
