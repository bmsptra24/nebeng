import React from 'react'
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
import BottomNavigation from './components/navigation/BottomNavigation'

// extend the theme
export const theme = extendTheme(configTheme)
type MyThemeType = typeof theme
declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
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
      {/* <StackNavigation /> */}
      <BottomNavigation />
    </NativeBaseProvider>
  )
}

export default App
