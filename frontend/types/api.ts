export interface UserData {
  uid: string
  email: string
  indentity: {
    category: 'passenger' | 'driver'
    name: string
  }
}

export interface LoginApiResponse {
  success: boolean
  message: string
  user: UserData
  token: string
}
