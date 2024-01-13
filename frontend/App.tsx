import React from 'react'
import { NativeBaseProvider, extendTheme } from 'native-base'
import { configTheme } from './config'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AuthPage from './page/AuthPage'
import LoginPage from './page/LoginPage'
import PassangerRegisterPage from './page/passanger/RegisterPage'
import DriverRegisterPage from './page/driver/RegisterPage'
import { RootStackParamList } from './types/navigation'
import PassangerHome from './page/passanger/HomePage'
import DriverHome from './page/driver/HomePage'
import { Text } from 'react-native'

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

// extend the theme
export const theme = extendTheme(configTheme)
type MyThemeType = typeof theme
declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="passengerHome">
      <Stack.Screen
        name="login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="auth"
        component={AuthPage}
        options={{ title: 'Register' }}
      />

      {/* Passanger */}
      <Stack.Screen
        name="passangerRegister"
        component={PassangerRegisterPage}
        options={{ title: 'Passanger Register' }}
      />
      <Stack.Screen
        name="passengerHome"
        component={PassangerHome}
        options={{ headerShown: false }}
      />

      {/* Driver */}
      <Stack.Screen
        name="driverRegister"
        component={DriverRegisterPage}
        options={{ title: 'Driver Register' }}
      />
      <Stack.Screen
        name="driverHome"
        component={DriverHome}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

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
      <AppNavigation />
    </NativeBaseProvider>
  )
}

export default App
