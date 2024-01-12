import { Stack, Text } from 'native-base'
import React from 'react'
import AtomButton from '../../atoms/AtomButton'

const MolBtnLogin = () => {
  return (
    <Stack space={'4'} w={'100%'} display={'flex'} alignItems={'center'}>
      <AtomButton
        variant="textOnly"
        bg={'primary.700'}
        label="Log in"
        style={{ justifyContent: 'center' }}
      />
      <Text>
        You don’t have account? let’s <Text color={'primary.600'}>Sign in</Text>
      </Text>
    </Stack>
  )
}

export default MolBtnLogin
