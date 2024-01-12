import { Stack, Text } from 'native-base'
import React from 'react'
import AtomButton from '../../atoms/AtomButton'
import axios from 'axios'
import { TLoginPage } from '../../../types/navigation'
import { useLoginState } from '../../../store/useLoginState'
import { LoginApiResponse } from '../../../types/api'

const MolBtnLogin: React.FC<TLoginPage> = ({ navigation }) => {
  const { email, password } = useLoginState()

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://tmpgs6w3-8000.asse.devtunnels.ms/login',
        {
          email,
          password,
        },
      )

      const data: LoginApiResponse = response.data
      console.log(data.user.indentity.category)

      if (data.success) {
        const homeScreen: 'driverhome' | 'passangerhome' =
          data.user.indentity.category === 'driver'
            ? 'driverhome'
            : 'passangerhome'
        navigation.push(homeScreen)
      } else {
        console.error('User not verified')
      }
    } catch (error) {
      console.error('Login failed', error)
    }
  }

  return (
    <Stack space={'4'} w={'100%'} display={'flex'} alignItems={'center'}>
      <AtomButton
        variant="textOnly"
        bg={'primary.700'}
        label="Log in"
        style={{ justifyContent: 'center' }}
        onPress={handleLogin}
      />
      <Text>
        You don’t have an account? Let’s{' '}
        <Text color={'primary.600'} onPress={() => navigation.push('auth')}>
          Sign up
        </Text>
      </Text>
    </Stack>
  )
}

export default MolBtnLogin
