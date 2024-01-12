import { Box, Link, Text } from 'native-base'
import React from 'react'
import AtomButton from '../../atoms/AtomButton'
import { templateHandleButtonPress } from '../../../utils/functionPlaceHolder'
import { TAuthPage } from '../../../types/navigation'

const MolBtnLogin: React.FC<TAuthPage> = ({ navigation, route }) => {
  return (
    <Box w={'full'} marginY={'6'}>
      <Text ml={'5'} fontWeight="normal">
        Register as
      </Text>
      <AtomButton
        bg={'primary.700'}
        variant="textOnly"
        style={{ marginTop: 10 }}
        label="Passengers"
        onPress={() => navigation.push('passangerRegister')}
      />
      <AtomButton
        bg={'primary.700'}
        variant="textOnly"
        style={{ marginTop: 10 }}
        label="Driver"
        onPress={() => navigation.push('driverRegister')}
      />
    </Box>
  )
}

export default MolBtnLogin
