import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { Box, Button, Center, Switch, Text, VStack, View } from 'native-base'
import React, { useEffect, useState } from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps'
import { usePositionState } from '../../store/usePositionState'
import { useNavigationState } from '../../store/useNavigationState'

const HomePage = () => {
  const {
    markerDestination,
    markerUserPosition,
    polylineCoordinates,
    setMarkerUserPosition,
  } = usePositionState()

  const { setActivity } = useNavigationState()

  const [mapRegion, setMapRegion] = useState({
    latitude: markerDestination.latitude,
    longitude: markerDestination.longitude,
    latitudeDelta: 0.003,
    longitudeDelta: 0.003,
  })

  // useEffect(() => {
  //   setMapRegion({
  //     latitude: markerDestination.latitude,
  //     longitude: markerDestination.longitude,
  //     latitudeDelta: 0.003,
  //     longitudeDelta: 0.003,
  //   })
  // }, [markerDestination])

  useEffect(() => {
    setMapRegion({
      latitude: -2.9827408624367266,
      longitude: 104.73565857635109,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003,
    })
    // setMapRegion({
    //   latitude: markerUserPosition?.latitude as number,
    //   longitude: markerUserPosition?.longitude as number,
    //   latitudeDelta: 0.003,
    //   longitudeDelta: 0.003,
    // })
  }, [])

  return (
    <VStack
      zIndex={1}
      position={'absolute'}
      top={0}
      bottom={0}
      left={0}
      right={0}
    >
      <VStack position={'absolute'} zIndex={2} w={'full'} h={'40'}>
        <VStack
          w={'full'}
          px={'8'}
          py={'8'}
          roundedBottom={40}
          // opacity={50}
          bg={'primary.600'}
        >
          <Switch size={'lg'} ml={'40'} />
          <Text fontSize={'2xl'}>Hey Abeng{'\n'}Let's take some orders</Text>
        </VStack>
      </VStack>

      {/* map */}
      <View w={'full'} h={'full'} flex={1}>
        <MapView
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 48,
          }}
          region={mapRegion}
        >
          {/* Add Marker component */}
          {/* <Marker
            coordinate={markerDestination}
            title="Your Location"
            description="This is your location"
          >
            <FontAwesome5 name="map-marker" size={36} color="red" />
          </Marker> */}

          <Marker
            coordinate={{
              latitude: -2.9827408624367266,
              longitude: 104.73565857635109,
            }}
            // coordinate={markerUserPosition}
            title="Your Location"
            description="This is your location"
            onPress={() => {
              setActivity('driverOrder')
            }}
          >
            <FontAwesome5 name="map-marker" size={36} color="red" />
          </Marker>

          {/* Add Polyline component */}
          {/* <Polyline
            coordinates={polylineCoordinates}
            strokeColor="blue"
            strokeWidth={2}
          /> */}
        </MapView>
      </View>
    </VStack>
  )
}

export default HomePage
