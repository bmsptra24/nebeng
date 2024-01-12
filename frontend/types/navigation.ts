import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  auth: undefined
  login: undefined
  passangerRegister: undefined
  passangerhome: undefined
  driverRegister: undefined
  driverhome: undefined
}

export type TAuthPage = NativeStackScreenProps<RootStackParamList, 'auth'>
export type TLoginPage = NativeStackScreenProps<RootStackParamList, 'login'>
export type TPassangerRegister = NativeStackScreenProps<
  RootStackParamList,
  'passangerRegister'
>
export type TDriverRegister = NativeStackScreenProps<
  RootStackParamList,
  'driverRegister'
>
