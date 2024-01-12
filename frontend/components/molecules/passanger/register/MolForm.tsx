import {
  FormControl,
  Input,
  Stack,
  Text,
  WarningOutlineIcon,
} from 'native-base'
import React from 'react'
import { TPassangerRegister } from '../../../../types/navigation'

const MolForm: React.FC<TPassangerRegister> = ({ navigation }) => {
  return (
    <FormControl isRequired>
      <Stack space={'4'}>
        <Input type="text" fontSize={'sm'} placeholder="Name" />
        <Input type="text" fontSize={'sm'} placeholder="Email" />
        <Input type="text" fontSize={'sm'} placeholder="Phone number" />
        <Input type="password" fontSize={'sm'} placeholder="Password" />
        <Input type="password" fontSize={'sm'} placeholder="Confirm password" />

        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Atleast 6 characters are required.
        </FormControl.ErrorMessage>
      </Stack>

      <Text textAlign={'center'}>
        Already have a account? let’s{' '}
        <Text color={'primary.600'} onPress={() => navigation.push('login')}>
          Log in
        </Text>
      </Text>
    </FormControl>
  )
}

export default MolForm
