import {
  Box,
  Checkbox,
  FormControl,
  Image,
  Input,
  Stack,
  Text,
  WarningOutlineIcon,
} from 'native-base'
import React from 'react'
import TempAuth from '../templates/TempAuth'
import AtomButton from '../atoms/AtomButton'
import MolForm from '../molecules/login/MolForm'
import MolBtnLogin from '../molecules/login/MolBtnLogin'

const LoginPage = () => {
  return (
    <Box h={'full'} display={'flex'} alignItems={'center'}>
      <TempAuth>
        <Image
          source={require('../../assets/images/hero-3.png')}
          alt="Image Hero"
          resizeMode="contain"
          h={'1/3'}
        />

        <Box w={'full'} my={'2.5'}>
          <MolForm />
        </Box>

        <MolBtnLogin />

        <Box w={'full'} my={'2.5'}>
          <AtomButton
            bg={'primary.200'}
            variant="textAndIcon"
            label="Continue with Google"
          />
        </Box>
      </TempAuth>
    </Box>
  )
}

export default LoginPage
