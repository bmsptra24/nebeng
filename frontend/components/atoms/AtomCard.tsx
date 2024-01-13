import { Entypo } from '@expo/vector-icons'
import {
  Button,
  Center,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  View,
} from 'native-base'
import React from 'react'
import { ImageSourcePropType } from 'react-native'

interface TAtomCard {
  imageSource: ImageSourcePropType | undefined
  title: string
  description: string
  buttonText: string
  flip?: boolean
}

const AtomCard: React.FC<TAtomCard> = ({
  imageSource,
  title,
  description,
  buttonText,
  flip = false,
}) => {
  return (
    <HStack
      position={'relative'}
      bg={'gray.300'}
      h={'48'}
      rounded={'xl'}
      flexDirection={flip ? 'row-reverse' : 'row'}
      px={'2'}
      pt={'2'}
    >
      <Image
        position={'absolute'}
        bottom={0}
        left={'2.5'}
        alt="hero in card"
        source={imageSource}
        w={'1/2'}
        h={'full'}
        resizeMode="contain"
      />
      <VStack
        position={'absolute'}
        right={'2.5'}
        w={'1/2'}
        h={'5/6'}
        justifyContent={'space-evenly'}
        alignSelf={'center'}
        px={'2.5'}
      >
        <Text fontWeight={'bold'} fontSize={'md'}>
          {title}
        </Text>
        <Text fontSize={'xs'}>{description}</Text>
        <Button bg={'primary.700'} rounded={'2xl'}>
          {buttonText}
        </Button>
      </VStack>
    </HStack>
  )
}

export default AtomCard
