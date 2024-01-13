import {
  Checkbox,
  FormControl,
  Input,
  Stack,
  Text,
  WarningOutlineIcon,
} from 'native-base'
import React from 'react'
import { useLoginState } from '../../../store/useLoginState'

const MolForm = () => {
  const { setEmail, setPassword } = useLoginState()

  return (
    <FormControl isRequired>
      <Stack space={'4'}>
        <Input
          type="text"
          fontSize={'sm'}
          placeholder="Email/Phone number..."
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          type="password"
          fontSize={'sm'}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
        />

        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Atleast 6 characters are required.
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  )
}

export default MolForm
