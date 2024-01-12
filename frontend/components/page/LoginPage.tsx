import { Box, Image } from 'native-base'
import React from 'react'
import TempAuth from '../templates/TempAuth'
import AtomButton from '../atoms/AtomButton'
import MolForm from '../molecules/login/MolForm'
import MolBtnLogin from '../molecules/login/MolBtnLogin'
import { TLoginPage } from '../../types/navigation'

const LoginPage: React.FC<TLoginPage> = (props) => {
  return (
    <Box h={'full'} display={'flex'} alignItems={'center'} mt={'5'}>
      <TempAuth>
        <Image
          source={require('../../assets/images/hero-4.png')}
          alt="Image Hero"
          resizeMode="contain"
          w={'full'}
        />

        <Box w={'full'} mb={'2.5'}>
          <MolForm />
        </Box>

        <MolBtnLogin {...props} />

        <Box w={'full'} my={'2.5'}>
          <AtomButton
            bg={'primary.200'}
            variant="textAndIcon"
            label="Continue with Google"
            onPress={() => console.log('Login with google clicked')}
          />
        </Box>
      </TempAuth>
    </Box>
  )
}

export default LoginPage
