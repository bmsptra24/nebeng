import { Ionicons } from '@expo/vector-icons'
import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Input,
  Text,
  VStack,
  View,
} from 'native-base'
import React from 'react'
import { Line } from 'react-native-svg'
import AtomButton from '../../components/atoms/AtomButton'

const OrderPage = () => {
  return (
    <Box position={'relative'}>
      <Box
        w={'full'}
        h={'64'}
        roundedBottom={56}
        shadow={'6'}
        bg={'primary.300'}
        position={'absolute'}
        safeAreaTop
      ></Box>

      <VStack w={'full'} h={'full'} space={'5'} alignItems={'center'} pb={'5'}>
        <Container w={'full'} h={'72'} justifyContent={'space-between'}>
          <HStack
            w={'full'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Ionicons name="chevron-back" size={40} color="white" />
            <Text fontSize={'4xl'} fontWeight={'semibold'} color={'white'}>
              Order
            </Text>
            <Ionicons name="chevron-back" size={40} color="transparent" />
          </HStack>

          <Text fontSize={'xl'} color={'white'}>
            Heyoo, Olie{'\n'}where are you going today?
          </Text>

          <VStack w={'full'} bg={'white'} rounded={'3xl'} p={'5'} shadow={'6'}>
            <Input borderWidth={'0'} placeholder="Your location..." />
            <View w={'full'} h={'0.5'} bg={'gray.400'} />
            <Input borderWidth={'0'} placeholder="Search for destination..." />
          </VStack>
        </Container>

        <Container
          w={'full'}
          flexGrow={1}
          rounded={'3xl'}
          shadow={'6'}
          bg={'amber.400'}
        ></Container>

        <Container w={'full'}>
          <AtomButton
            bg={'primary.700'}
            label="Order Driver"
            variant="textOnly"
            style={{ justifyContent: 'center' }}
          />
        </Container>
      </VStack>
    </Box>
  )
}

export default OrderPage
