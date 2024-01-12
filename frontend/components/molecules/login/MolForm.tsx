import {
  Checkbox,
  FormControl,
  Input,
  Stack,
  Text,
  WarningOutlineIcon,
} from 'native-base'
import React from 'react'

const MolForm = () => {
  return (
    <FormControl isRequired>
      <Stack space={'4'}>
        <Input
          type="text"
          fontSize={'sm'}
          placeholder="Email/Phone number..."
        />
        <Input type="password" fontSize={'sm'} placeholder="Password" />

        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Atleast 6 characters are required.
        </FormControl.ErrorMessage>
      </Stack>
      <Checkbox value="Remember me" colorScheme="blue">
        <Text>Remember me</Text>
      </Checkbox>
    </FormControl>
  )
}

export default MolForm
