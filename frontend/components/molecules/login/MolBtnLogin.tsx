import { Stack, Text } from 'native-base'
import React from 'react'
import AtomButton from '../../atoms/AtomButton'
import { TLoginPage } from '../../../types/navigation'

const MolBtnLogin: React.FC<TLoginPage> = ({ navigation }) => {
  return (
    <Stack space={'4'} w={'100%'} display={'flex'} alignItems={'center'}>
      <AtomButton
        variant="textOnly"
        bg={'primary.700'}
        label="Log in"
        style={{ justifyContent: 'center' }}
        onPress={() => navigation.push('passangerhome')}
      />
      <Text>
        You don’t have account? let’s{' '}
        <Text color={'primary.600'} onPress={() => navigation.push('auth')}>
          Sign up
        </Text>
      </Text>
    </Stack>
  )
}

export default MolBtnLogin
