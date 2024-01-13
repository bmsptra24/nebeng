import AuthPage from '../../page/AuthPage'
import LoginPage from '../../page/LoginPage'
import PassangerRegisterPage from '../../page/passanger/RegisterPage'
import DriverRegisterPage from '../../page/driver/RegisterPage'
import { RootStackParamList } from '../../types/navigation'
import PassangerHome from '../../page/passanger/HomePage'
import DriverHome from '../../page/driver/HomePage'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<RootStackParamList>()

const StackNavigation = () => {
  return (
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
}

export default StackNavigation
