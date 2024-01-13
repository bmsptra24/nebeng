import { HStack, Heading, Image, Text, VStack, View } from 'native-base'
import React from 'react'
import Logo from '../../../atoms/Logo'

export const Header = () => {
  return (
    <HStack
      position={'relative'}
      h={'40'}
      bg={'primary.100'}
      shadow={'9'}
      justifyContent={'space-between'}
      px={'5'}
    >
      <VStack w={'2/3'} justifyContent={'space-evenly'}>
        <HStack mt={'2'} space={'2'} alignItems={'center'}>
          <View w={'9'} h={'9'}>
            <Logo resizeMode="contain" variant="white" />
          </View>
          <Heading color={'white'} fontFamily={'heading'}>
            Nebeng
          </Heading>
        </HStack>
        <Text fontSize={'xl'} color={'white'}>
          Are you ready for{'\n'}new adventure today?
        </Text>
      </VStack>
      <Image
        position={'absolute'}
        bottom={0}
        right={5}
        w={'1/3'}
        h={'4/5'}
        resizeMode="contain"
        alt="Hero"
        alignSelf={'center'}
        source={require('../../../../assets/images/hero-3.png')}
      />
    </HStack>
  )
}
