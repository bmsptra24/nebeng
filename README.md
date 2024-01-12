# Nebeng 🏍️

Nebeng is a ride-sharing app designed specifically for students, providing an efficient and cost-effective way for them to share rides. Whether you have a car or a motorbike with extra space, Nebeng allows you to offer seats to fellow students heading the same way, fostering a community where students can help each other out, save money, and reach their destinations conveniently.

# Table of Contents 📑

1. [Introduction](https://github.com/bmsptra24/nebeng?tab=readme-ov-file#nebeng-%EF%B8%8F)

   - [Purpose](https://github.com/bmsptra24/nebeng?tab=readme-ov-file#nebeng-%EF%B8%8F)
   - [Image UI](https://github.com/bmsptra24/nebeng?tab=readme-ov-file#image-ui-)
   - [Technologies Used](https://github.com/bmsptra24/nebeng?tab=readme-ov-file#technologies-used-%EF%B8%8F)

2. [Key Features](https://github.com/bmsptra24/nebeng?tab=readme-ov-file#key-features-)

3. [Getting Started](https://github.com/bmsptra24/nebeng?tab=readme-ov-file#getting-started-)

   - [Frontend Setup](https://github.com/bmsptra24/nebeng?tab=readme-ov-file#frontend)
   - [Backend Setup](https://github.com/bmsptra24/nebeng?tab=readme-ov-file#backend)

4. [API Endpoints](https://github.com/bmsptra24/nebeng?tab=readme-ov-file#api-endpoints-)

## Image UI 🌈

### Login & Register

![Login & Register](https://github.com/bmsptra24/nebeng/blob/main/doc/Login.png)

### Chat

![Chat](https://github.com/bmsptra24/nebeng/blob/main/doc/Chat.png)

### Order MVP

![Order MVP](https://github.com/bmsptra24/nebeng/blob/main/doc/OrdeR%20MVP.png)

### Driver Profile

![Driver Profile](https://github.com/bmsptra24/nebeng/blob/main/doc/Profil%20Driver.png)

### Passenger Profile

![Passenger Profile](https://github.com/bmsptra24/nebeng/blob/main/doc/Profil%20Passenger.png)

### Take Order

![Take Order](https://github.com/bmsptra24/nebeng/blob/main/doc/Take%20order.png)

### Wallet

![Wallet](https://github.com/bmsptra24/nebeng/blob/main/doc/WALLET.png)

### Transfer

![Transfer](https://github.com/bmsptra24/nebeng/blob/main/doc/transfer.png)

## Technologies Used 🛠️

- **Frontend:**

  - React Native Expo 📱
  - NativeBase for UI framework 🎨

- **Backend:**
  - Express.js 🚀
  - Firebase Firestore 🔥
  - Firebase Authentication 🔑

## Key Features 🌟

- **Passenger-Driven Rides:**
  - Students can find drivers heading in the same direction, making it a mutually beneficial arrangement.
  - Passengers save money, and drivers earn extra income while helping their peers.

## Getting Started 🚀

### Frontend

1. **Clone the Project:**

   ```bash
   git clone https://github.com/bmsptra24/nebeng.git
   ```

2. **Install Dependencies:**

   ```bash
   cd ./nebeng/frontend
   npm install
   ```

3. **Start the Expo Project:**

   ```bash
   npx expo start
   ```

4. **Running on Emulator/Device:**
   - Scan the QR code using the Expo Go app on your mobile device or press 'a' for Android emulator or 'i' for iOS simulator in the terminal.

### Backend

1. **Clone the Project:**

   ```bash
   cd ./nebeng/backend
   npm install
   ```

2. **Configure Firebase Credentials:**

   - Copy the contents of `env.template` and configure the environment variables in your backend project.

3. **Configure Base URL:**

   - Update the `baseUrl` in the `config.ts` file.

4. **Start the Backend Server:**
   ```bash
   npm start
   ```

## API Endpoints 📡

- **Login:**
  - Endpoint: `/login`
  - Method: `POST`
  - Request Body:
    ```json
    {
      "email": "driver@gmail.com",
      "password": "driver123"
    }
    ```

---
