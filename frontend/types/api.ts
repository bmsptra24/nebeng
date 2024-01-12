export interface UserData {
  uid: string
  email: string
  indentity: {
    category: string
    name: string
  }
}

export interface LoginApiResponse {
  success: boolean
  message: string
  user: UserData
  token: string
}
