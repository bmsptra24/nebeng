import React from 'react'
import { Button, Icon, Text } from 'native-base'
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
        pl={'5'}
        pb={'2.5'}
        style={style}
      >
        <Text fontSize={'xl'} color={'white'}>
          {label}
        </Text>
      </Button>
    )

  if (variant === 'textAndIcon')
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
        pl={'5'}
        pb={'2.5'}
        style={style}
      >
        <Icon name="home" />
        <Text fontSize={'xl'} color={'white'}>
          {label}
        </Text>
      </Button>
    )
}

export default AtomButton
