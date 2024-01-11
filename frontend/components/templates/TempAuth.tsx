import { Container, Heading, Image, Text } from 'native-base'
import React from 'react'

const TempAuth: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Container
      w={'full'}
      h={'full'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      py={'10'}
    >
      {children}
      <Text fontWeight="normal" fontSize={'xs'} textAlign={'center'} w={'full'}>
        By logging or registering, you agree to our {'\n'}
        <Text color={'primary.600'}>Term of service </Text>and
        <Text color={'primary.600'}> Privacy policy.</Text>
      </Text>
    </Container>
  )
}

export default TempAuth
