import express from 'express'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import axios from 'axios'

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

app.get('/nearby-locations', async (req, res) => {
  try {
    const dummmyResponse = {
      hasilPencarian: [
        {
          name: 'Restoran A',
          address: 'Jalan Contoh 123, Jakarta',
          types: ['restaurant'],
          geometry: {
            location: {
              lat: -6.2123,
              lng: 106.8456,
            },
          },
        },
        {
          name: 'Kafe B',
          address: 'Jalan Contoh 456, Jakarta',
          types: ['cafe'],
          geometry: {
            location: {
              lat: -6.209,
              lng: 106.8482,
            },
          },
        },
      ],
    }

    res.json(dummmyResponse)
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching nearby locations:', error.message)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
})

app.get('/getDetailLocation', async (req, res) => {
  const { lat, lon } = req.query

  if (!lat || !lon) {
    return res
      .status(400)
      .json({ error: 'Parameter latitude dan longitude diperlukan.' })
  }

  try {
    const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    const response = await axios.get(nominatimUrl)
    const data = response.data

    if ('display_name' in data) {
      const address = data
      return res.json(address)
    } else {
      return res.json({ error: 'Tidak ada hasil.' })
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message)
      return res
        .status(500)
        .json({ error: 'Terjadi kesalahan dalam melakukan permintaan.' })
    }
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port} | http://localhost:${port}/`)
})
