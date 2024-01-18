import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, extendTheme } from 'native-base'
import { configTheme } from './config'

// font
import {
  useFonts,
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
} from '@expo-google-fonts/josefin-sans'
import BottomNavigationPassenger from './components/navigation/BottomNavigationPassenger'
import StackNavigation from './components/navigation/StackNavigation'
import { useCredentialState } from './store/useCredentialState'
import HomePage from './page/driver/HomePage'
import { useNavigationState } from './store/useNavigationState'
import OrderPageDriver from './page/driver/OrderPage'
import OrderPagePassenger from './page/passanger/OrderPage'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loading from './components/templates/Loading'
import SkeletonHomePage from './components/skeletons/passenger/SkeletonHomePage'
import PricePage from './page/passanger/PricePage'
import BottomNavigationDriver from './components/navigation/BottomNavigationDriver'
// extend the theme
export const theme = extendTheme(configTheme)
type MyThemeType = typeof theme
declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}

const getCredentialInLocal = async () => {
  const token = await AsyncStorage.getItem('TOKEN')
  const userData = await AsyncStorage.getItem('USER_DATA')
  if (token === null) return null
  if (userData === null) return null
  return await JSON.parse(userData)
}

const Authentication = () => {
  const { userData, setUserData } = useCredentialState()
  const { activity } = useNavigationState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      setUserData(await getCredentialInLocal())
      setIsLoading(false)
    })()
  }, [])

  if (isLoading) return <SkeletonHomePage />

  if (userData?.indentity.category === 'passenger') {
    if (activity === 'default') return <BottomNavigationPassenger />
    if (activity === 'passengerOrder') return <OrderPagePassenger />
    if (activity === 'passangerPrice') return <PricePage />
  }
  if (userData?.indentity.category === 'driver') {
    if (activity === 'default') return <BottomNavigationDriver />
    if (activity === 'driverOrder') return <OrderPageDriver />
  }

  return <StackNavigation />
}

const App = () => {
  // load font
  const [fontsLoaded] = useFonts({
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
  })

  if (!fontsLoaded) {
    return <></>
  }

  return (
    <NativeBaseProvider theme={theme}>
      <Authentication />
      {/* <PricePage /> */}
      {/* <HomePage /> */}
      {/* <OrderPage /> */}
    </NativeBaseProvider>
  )
}

export default App
