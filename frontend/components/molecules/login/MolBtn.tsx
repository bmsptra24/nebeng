import { Box, Text } from 'native-base'
import React from 'react'
import AtomButton from '../../atoms/AtomButton'
import { templateHandleButtonPress } from '../../../utils/functionPlaceHolder'

const MolBtnLogin = () => {
  return (
    <Box w={'full'} marginY={'6'}>
      <Text ml={'5'} fontWeight="normal">
        Login as
      </Text>
      <AtomButton
        style={{ marginTop: 10 }}
        label="Passengers"
        onPress={templateHandleButtonPress}
      />
      <AtomButton
        style={{ marginTop: 10 }}
        label="Driver"
        onPress={templateHandleButtonPress}
      />
    </Box>
  )
}

export default MolBtnLogin
