import { Box, Center, IIconProps, Pressable, Text } from 'native-base'

interface TAtomButtonUpluadDocument {
  variant: 'required' | 'optional'
  text: string
  icon: IIconProps
}

const AtomButtonUpluadDocument: React.FC<TAtomButtonUpluadDocument> = ({
  text,
  icon,
  variant,
}) => {
  return (
    <Box my={'2.5'}>
      <Text>
        {variant === 'required' && <Text color={'primary.700'}>*</Text>}
        {text}
      </Text>
      <Pressable w={'24'} h={'24'} bg={'gray.300'} rounded={'2xl'}>
        <Center h={'full'}>{icon}</Center>
      </Pressable>
    </Box>
  )
}

export default AtomButtonUpluadDocument
