import React from 'react'
import { Box, Button, Icon, Image, Pressable, Text } from 'native-base'
import { StyleProp, ViewStyle } from 'react-native'
import { ColorType } from 'native-base/lib/typescript/components/types'

interface AtomButtonProps {
  label: string
  variant: 'textOnly' | 'textAndIcon'
  onPress?: () => void
  style?: StyleProp<ViewStyle>
  bg: ColorType
}

const AtomButton: React.FC<AtomButtonProps> = ({
  label,
  onPress,
  style,
  variant,
  bg,
}) => {
  if (variant === 'textOnly')
    return (
      <Button
        _pressed={{
          bg: 'primary.800',
        }}
        bg={bg}
        rounded={'full'}
        w={'full'}
        onPress={onPress}
        display={'flex'}
        justifyContent={'start'}
        style={style}
        px={'5'}
        pb={'3'}
      >
        <Text fontSize={'xl'} color={'white'}>
          {label}
        </Text>
      </Button>
    )

  if (variant === 'textAndIcon')
    return (
      <Pressable
        _pressed={{
          bg: 'primary.800',
        }}
        bg={bg}
        rounded={'full'}
        w={'full'}
        onPress={onPress}
        display={'flex'}
        justifyContent={'space-between'}
        flexDirection={'row-reverse'}
        alignItems={'center'}
        px={'5'}
        py={'3'}
        style={style}
      >
        <Image
          source={require('../../assets/icons/google.png')}
          alt="Logo Google"
        />
        <Text fontSize={'xl'} color={'white'}>
          {label}
        </Text>
      </Pressable>
    )
}

export default AtomButton
