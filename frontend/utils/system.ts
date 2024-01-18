import { reloadAsync } from 'expo-updates'

export const restartApp = async () => {
  try {
    await reloadAsync()
  } catch (error) {
    console.error('Error while restarting the app:', error)
  }
}
