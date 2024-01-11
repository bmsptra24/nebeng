import {
  Box,
  Checkbox,
  FormControl,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  WarningOutlineIcon,
} from 'native-base'
import React from 'react'
import MolOrnament from '../molecules/login/MolOrnament'
import TempAuth from '../templates/TempAuth'
import MolBtnLogin from '../molecules/login/MolBtn'
import AtomButton from '../atoms/AtomButton'

const LoginPage = () => {
  return (
    <Box h={'full'} display={'flex'} alignItems={'center'}>
      {/* ornamen */}

      <TempAuth>
        <FormControl isRequired>
          <Stack space={'4'}>
            <Input
              type="text"
              fontSize={'sm'}
              placeholder="Email/Phone number..."
            />
            <Input type="password" fontSize={'sm'} placeholder="Password" />

            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </Stack>
          <Checkbox value="Remember me" colorScheme="blue">
            <Text>Remember me</Text>
          </Checkbox>
        </FormControl>

        <Stack space={'4'} w={'100%'} display={'flex'} alignItems={'center'}>
          <AtomButton
            variant="textOnly"
            bg={'primary.700'}
            label="Log in"
            style={{ justifyContent: 'center' }}
          />
          <Text>
            You don’t have account? let’s{' '}
            <Text color={'primary.600'}>Sign in</Text>
          </Text>
        </Stack>

        <AtomButton
          bg={'primary.200'}
          variant="textAndIcon"
          label="Continue with Google"
        />
      </TempAuth>
    </Box>
  )
}

export default LoginPage
