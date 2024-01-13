import { Box } from 'native-base'
import React from 'react'
import TempAuth from '../../components/templates/TempAuth'
import AtomButton from '../../components/atoms/AtomButton'
import MolHeader from '../../components/molecules/passanger/register/MolHeader'
import MolForm from '../../components/molecules/passanger/register/MolForm'
import { TPassangerRegister } from '../../types/navigation'

const PassangerRegisterPage: React.FC<TPassangerRegister> = (props) => {
  return (
    <Box h={'full'} display={'flex'} alignItems={'center'}>
      <TempAuth>
        <Box flexGrow={1}>
          <MolHeader />
        </Box>

        <Box w={'full'} my={'2.5'}>
          <MolForm {...props} />
        </Box>

        <Box w={'full'} my={'2.5'}>
          <AtomButton
            bg={'primary.700'}
            label="Register"
            variant="textOnly"
            style={{ justifyContent: 'center' }}
            onPress={() => props.navigation.push('passengerHome')}
          />
        </Box>
      </TempAuth>
    </Box>
  )
}

export default PassangerRegisterPage
