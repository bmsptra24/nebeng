import { Box, Center, Heading, Image, Text } from 'native-base'
import MolBtnLogin from '../molecules/auth/MolBtn'
import MolOrnament from '../molecules/auth/MolOrnament'
import TempAuth from '../templates/TempAuth'
import { TAuthPage } from '../../types/navigation'
import { SafeAreaView } from 'react-native-safe-area-context'

const AuthPage: React.FC<TAuthPage> = (props) => {
  return (
    <Box h={'full'} display={'flex'} alignItems={'center'}>
      {/* ornamen */}
      <MolOrnament />

      <TempAuth>
        <Heading flexGrow={1}>
          <Image
            source={require('../../assets/images/logo.png')}
            alt="Logo"
            resizeMode="contain"
            bg={'amber.300'}
            w={'8'}
            h={'12'}
          />
          <Text> Nebeng</Text>
        </Heading>
        <Center w={'full'}>
          <Image
            source={require('../../assets/images/hero-1.png')}
            size="2xl"
            alt="Image Hero"
            resizeMode="contain"
          />
        </Center>
        <MolBtnLogin {...props} />
      </TempAuth>
    </Box>
  )
}

export default AuthPage
