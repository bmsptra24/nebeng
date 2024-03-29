import { Stack, Text, useToast } from 'native-base'
import React from 'react'
import AtomButton from '../../atoms/AtomButton'
import axios, { AxiosError } from 'axios'
import { TLoginPage } from '../../../types/navigation'
import { useLoginState } from '../../../store/useLoginState'
import { LoginApiResponse } from '../../../types/api'
import { baseUrl } from '../../../config'
import { useCredentialState } from '../../../store/useCredentialState'
import { signInWithEmail } from '../../../utils/authentication'
import AsyncStorage from '@react-native-async-storage/async-storage'

const MolBtnLogin: React.FC<TLoginPage> = ({ navigation }) => {
  const { email, password } = useLoginState()
  const { setUserData, setToken } = useCredentialState()
  const toast = useToast()

  const handleLogin = async () => {
    try {
      const response = await signInWithEmail({ email, password })

      const data: LoginApiResponse = response.data
      console.log(data.user.indentity.category)

      if (data.success) {
        setUserData(data.user)
        setToken(data.token)
        AsyncStorage.setItem('USER_DATA', JSON.stringify(data.user))
        AsyncStorage.setItem('TOKEN', data.token)
      } else {
        const message = 'User not verified'
        console.error(message)
        showToast(message)
      }
    } catch (error) {
      handleLoginError(error)
    }
  }

  const showToast = (message: string) => {
    toast.show({
      description: message,
    })
  }

  const handleLoginError = (error: any) => {
    if (error instanceof AxiosError) {
      let message = 'Login failed, '
      if (error.code === 'ERR_BAD_REQUEST') message = message + 'user not found'
      console.error(error)
      showToast(message)
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
