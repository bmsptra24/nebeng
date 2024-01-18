import axios from 'axios'
import { baseUrl } from '../config'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { restartApp } from './system'

export const signInWithEmail = async (props: {
  email: string
  password: string
}) => {
  return await axios.post(baseUrl + 'login', props)
}

export const logOut = async () => {
  try {
    await AsyncStorage.clear()
    await restartApp()
    console.log('Log out success')
  } catch (error) {
    console.log('Log out fail')
  }
}
