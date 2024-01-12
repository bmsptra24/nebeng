import React from 'react'
import { NativeBaseProvider, extendTheme } from 'native-base'
import { configTheme } from './config'
import AuthPage from './components/page/AuthPage'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginPage from './components/page/LoginPage'
import PassangerRegister from './components/page/PassangerRegister'

// extend the theme
export const theme = extendTheme(configTheme)
type MyThemeType = typeof theme
declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView>
        {/* <AuthPage /> */}
        <LoginPage />
        {/* <PassangerRegister /> */}
      </SafeAreaView>
    </NativeBaseProvider>
  )
}
