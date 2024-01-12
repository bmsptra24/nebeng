import React from 'react'
import OrnamentCircle from '../../atoms/OrnamentCircle'

const MolOrnament = () => {
  return (
    <>
      <OrnamentCircle
        variant="big"
        color="secondary.700"
        style={{ right: -120 }}
      />
      <OrnamentCircle
        variant="medium"
        color="secondary.800"
        style={{ left: -100, top: '20%' }}
      />
      <OrnamentCircle
        variant="small"
        color="secondary.400"
        style={{ right: -60, top: '50%' }}
      />
    </>
  )
}

export default MolOrnament
