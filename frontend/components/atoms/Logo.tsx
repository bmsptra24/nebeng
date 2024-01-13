import { Image } from 'native-base'
import { ResponsiveValue } from 'native-base/lib/typescript/components/types'
import { ImageResizeMode } from 'react-native'

const Logo = ({
  resizeMode,
  variant = 'black',
}: {
  variant?: 'black' | 'white'
  resizeMode: ImageResizeMode
}) => {
  let source
  if (variant === 'white')
    source = require('../../assets/images/logo-white.png')
  if (variant === 'black') source = require('../../assets/images/logo.png')

  return (
    <Image
      alt="Logo"
      w={'full'}
      h={'full'}
      source={source}
      resizeMode={resizeMode}
    />
  )
}

export default Logo
