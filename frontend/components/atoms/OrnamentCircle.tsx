import React from 'react'
import { Box } from 'native-base'
import { ColorType } from 'native-base/lib/typescript/components/types'
import { StyleProp, ViewStyle } from 'react-native'

interface OrnamentComponentProps {
  color?: ColorType
  variant: 'big' | 'medium' | 'small'
  style?: StyleProp<ViewStyle>
}

const OrnamentCircle: React.FC<OrnamentComponentProps> = ({
  variant,
  color,
  style,
}) => {
  if (variant === 'big')
    return (
      <Box
        position={'absolute'}
        w={'56'}
        h={'56'}
        bg={'white'}
        rounded={'full'}
        borderWidth={18}
        borderColor={color}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        style={style}
      >
        <Box
          w={'32'}
          h={'32'}
          bg={'white'}
          rounded={'full'}
          borderWidth={18}
          borderColor={color}
        />
      </Box>
    )

  if (variant === 'medium')
    return (
      <Box
        position={'absolute'}
        w={'40'}
        h={'40'}
        bg={'white'}
        rounded={'full'}
        borderWidth={15}
        borderColor={color}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        style={style}
      >
        <Box
          w={'24'}
          h={'24'}
          bg={'white'}
          rounded={'full'}
          borderWidth={13}
          borderColor={color}
        />
      </Box>
    )

  if (variant === 'small')
    return (
      <Box
        position={'absolute'}
        w={'24'}
        h={'24'}
        bg={'white'}
        rounded={'full'}
        borderWidth={10}
        borderColor={color}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        style={style}
      >
        <Box
          w={'12'}
          h={'12'}
          bg={'white'}
          rounded={'full'}
          borderWidth={8}
          borderColor={color}
        />
      </Box>
    )
}

export default OrnamentCircle
