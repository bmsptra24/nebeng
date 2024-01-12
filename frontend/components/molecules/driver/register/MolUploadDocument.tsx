import React from 'react'
import AtomButtonUpluadDocument from '../../../atoms/AtomButtonUpluadDocument'
import { Entypo } from '@expo/vector-icons'
import { HStack } from 'native-base'

const MolUploadDocument: React.FC = () => {
  return (
    <HStack justifyContent={'space-between'}>
      <AtomButtonUpluadDocument
        variant="required"
        icon={<Entypo name="plus" size={32} color="black" />}
        text="KTP"
      />
      <AtomButtonUpluadDocument
        variant="required"
        icon={<Entypo name="plus" size={32} color="black" />}
        text="KTM"
      />
      <AtomButtonUpluadDocument
        variant="required"
        icon={<Entypo name="plus" size={32} color="black" />}
        text="STNK"
      />
    </HStack>
  )
}

export default MolUploadDocument
