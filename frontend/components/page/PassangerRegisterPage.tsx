import { Box } from 'native-base'
import React from 'react'
import TempAuth from '../templates/TempAuth'
import AtomButton from '../atoms/AtomButton'
import MolHeader from '../molecules/passanger-register/MolHeader'
import MolForm from '../molecules/passanger-register/MolForm'

const PassangerRegisterPage = () => {
  return (
    <Box h={'full'} display={'flex'} alignItems={'center'}>
      <TempAuth>
        <Box flexGrow={1}>
          <MolHeader />
        </Box>

        <Box w={'full'} my={'2.5'}>
          <MolForm />
        </Box>

        <Box w={'full'} my={'2.5'}>
          <AtomButton
            bg={'primary.700'}
            label="Register"
            variant="textOnly"
            style={{ justifyContent: 'center' }}
          />
        </Box>
      </TempAuth>
    </Box>
  )
}

export default PassangerRegisterPage
