import { Box, Heading, Image } from 'native-base'
import MolBtnLogin from '../molecules/login/MolBtn'
import MolOrnament from '../molecules/login/MolOrnament'
import TempAuth from '../templates/TempAuth'

const AuthPage = () => {
  return (
    <Box h={'full'} display={'flex'} alignItems={'center'}>
      {/* ornamen */}
      <MolOrnament />

      <TempAuth>
        <Heading flexGrow={1}>Nebeng</Heading>
        <Image
          source={require('../../assets/images/hero-1.png')}
          size="2xl"
          alt="Image Hero"
          resizeMode="contain"
        />
        <MolBtnLogin />
      </TempAuth>
    </Box>
  )
}

export default AuthPage
