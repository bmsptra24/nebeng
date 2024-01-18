import { Theme } from 'native-base'

const configTheme = {
  colors: {
    primary: {
      100: '#2C4269',
      200: '#304973',
      300: '#4B70B1',
      400: '#537BC3',
      500: '#5B87D7',
      600: '#6495ED',
      700: '#FF401F',
      800: '#FF6544',
      900: '#FF8969',
      50: '#FFFACD',
    },
    // Perubahan warna secondary
    secondary: {
      100: '#537BC3',
      200: '#5B87D7',
      300: '#6495ED',
      400: '#B27C9A',
      500: '#D97071',
      600: '#FF6347',
      700: '#FF8969',
      800: '#FFAF8A',
      900: '#FFD5AC',
      50: '#FFFACD',
    },
  },
  fontConfig: {
    JosefinSans: {
      100: {
        normal: 'JosefinSans_100Thin',
      },
      200: {
        normal: 'JosefinSans_200ExtraLight',
      },
      300: {
        normal: 'JosefinSans_300Light',
      },
      400: {
        normal: 'JosefinSans_400Regular',
      },
      500: {
        normal: 'JosefinSans_500Medium',
      },
      600: {
        normal: 'JosefinSans_600SemiBold',
      },
      700: {
        normal: 'JosefinSans_700Bold',
      },
      800: {
        normal: 'JosefinSans_800ExtraBold',
      },
      900: {
        normal: 'JosefinSans_900Black',
      },
    },
  },

  fonts: {
    heading: 'JosefinSans',
    body: 'JosefinSans',
    mono: 'JosefinSans',
  },

  config: {
    initialColorMode: 'light',
  },
}

// const baseUrl = 'http://localhost:8000/'
const baseUrl = 'https://tmpgs6w3-5413.asse.devtunnels.ms/'

export { configTheme, baseUrl }
