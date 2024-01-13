import React from 'react'
import { NativeBaseProvider, extendTheme } from 'native-base'
import { configTheme } from './config'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AuthPage from './components/page/AuthPage'
import LoginPage from './components/page/LoginPage'
import PassangerRegisterPage from './components/page/passanger/RegisterPage'
import DriverRegisterPage from './components/page/driver/RegisterPage'
import { RootStackParamList } from './types/navigation'
import PassangerHome from './components/page/passanger/HomePage'
import DriverHome from './components/page/driver/HomePage'

// extend the theme
export const theme = extendTheme(configTheme)
type MyThemeType = typeof theme
declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="login">
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
  return (
    <NativeBaseProvider theme={theme}>
      <AppNavigation />
    </NativeBaseProvider>
  )
}

export default App
