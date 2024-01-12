import {
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
        <Input type="text" fontSize={'sm'} placeholder="Name" />
        <Input type="text" fontSize={'sm'} placeholder="Email" />
        <Input type="text" fontSize={'sm'} placeholder="Phone number" />
        <Input
          type="text"
          fontSize={'sm'}
          placeholder="Emergency phone number"
        />
        <Input type="password" fontSize={'sm'} placeholder="Password" />
        <Input type="password" fontSize={'sm'} placeholder="Confirm password" />

        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Atleast 6 characters are required.
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  )
}

export default MolForm
