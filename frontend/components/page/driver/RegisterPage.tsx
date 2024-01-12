import { Box, HStack, ScrollView, Text } from 'native-base'
import React from 'react'
import TempAuth from '../../templates/TempAuth'
import AtomButton from '../../atoms/AtomButton'
import MolForm from '../../molecules/driver/register/MolForm'
import MolUploadDocument from '../../molecules/driver/register/MolUploadDocument'
import { TDriverRegister } from '../../../types/navigation'

const DriverRegisterPage: React.FC<TDriverRegister> = ({ navigation }) => {
  return (
    <ScrollView>
      <Box h={'full'} display={'flex'} alignItems={'center'}>
        <TempAuth>
          {/* <Box flexGrow={1}>
          <MolHeader />
        </Box> */}

          <Box w={'full'} my={'2.5'}>
            <MolForm />

            <Box my={'5'}>
              <Text>Upload document</Text>
              <MolUploadDocument />
            </Box>

            <Text textAlign={'center'}>
              Already have a account? let’s{' '}
              <Text
                onPress={() => navigation.push('login')}
                color={'primary.600'}
              >
                Log in
              </Text>
            </Text>
          </Box>

          <Box w={'full'} my={'2.5'}>
            <AtomButton
              bg={'primary.700'}
              label="Register"
              variant="textOnly"
              style={{ justifyContent: 'center' }}
              onPress={() => navigation.push('driverhome')}
            />
          </Box>
        </TempAuth>
      </Box>
    </ScrollView>
  )
}

export default DriverRegisterPage
