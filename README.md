# Nebeng 🏍️

Nebeng is a ride-sharing app designed specifically for students, providing an efficient and cost-effective way for them to share rides. Whether you have a car or a motorbike with extra space, Nebeng allows you to offer seats to fellow students heading the same way, fostering a community where students can help each other out, save money, and reach their destinations conveniently.

# Table of Contents 📑

1. [Introduction](#introduction)

   - [Purpose](#purpose)
   - [Image UI](#image-ui)
   - [Technologies Used](#technologies-used)

2. [Key Features](#key-features)

3. [Getting Started](#getting-started)

   - [Frontend Setup](#frontend-setup)
     - [Clone the Project](#clone-the-project)
     - [Install Dependencies](#install-dependencies)
     - [Start the Expo Project](#start-the-expo-project)
     - [Running on Emulator/Device](#running-on-emulatordevice)
   - [Backend Setup](#backend-setup)
     - [Clone the Project](#clone-the-project-1)
     - [Install Dependencies](#install-dependencies-1)
     - [Configure Firebase Credentials](#configure-firebase-credentials)
     - [Configure Base URL](#configure-base-url)
     - [Start the Backend Server](#start-the-backend-server)

4. [API Endpoints](#api-endpoints)

5. [Contributing](#contributing)

6. [License](#license)

## Image UI 🌈

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

## Contributing 🤝

If you want to contribute to Nebeng, please follow the [contribution guidelines](CONTRIBUTING.md).

## License 📄

This project is licensed under the [MIT License](LICENSE).

---
