import axios from 'axios'
import { baseUrl } from '../config'

export const signInWithEmail = async (props: {
  email: string
  password: string
}) => {
  return await axios.post(baseUrl + 'login', props)
}
