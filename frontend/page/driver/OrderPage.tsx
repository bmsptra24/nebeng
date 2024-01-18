import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { HStack, Text, VStack, View } from 'native-base'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { usePositionState } from '../../store/usePositionState'
import AtomButton from '../../components/atoms/AtomButton'

const OrderPage = () => {
  const {
    markerDestination,
    markerUserPosition,
    polylineCoordinates,
    setMarkerUserPosition,
  } = usePositionState()

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
    <VStack h={'full'}>
      <VStack
        position={'absolute'}
        zIndex={2}
        w={'full'}
        h={'full'}
        justifyContent={'space-between'}
      >
        {/* header */}
        <VStack
          w={'full'}
          px={'8'}
          py={'8'}
          h={'40'}
          roundedBottom={40}
          // opacity={50}
          bg={'primary.700'}
        >
          <HStack
            w={'full'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Ionicons name="chevron-back" size={40} color="white" />
            <Text fontSize={'4xl'} fontWeight={'semibold'} color={'white'}>
              Take Order
            </Text>
            <Ionicons name="chevron-back" size={40} color="transparent" />
          </HStack>
        </VStack>

        <VStack
          bg={'white'}
          p={'5'}
          rounded={'2xl'}
          shadow={'6'}
          m={'5'}
          space={'1.5'}
        >
          <HStack justifyContent={'space-between'}>
            <Text fontSize={'lg'}>Destination</Text>
            <Text fontSize={'lg'}>Bukit Lama</Text>
          </HStack>
          <HStack justifyContent={'space-between'}>
            <Text fontSize={'lg'}>Estimate to destination</Text>
            <Text fontSize={'lg'}>4 Min</Text>
          </HStack>
          <HStack justifyContent={'space-between'}>
            <Text fontSize={'lg'}>Price</Text>
            <Text fontSize={'lg'}>Rp7.000</Text>
          </HStack>
          <AtomButton
            bg={'primary.200'}
            style={{ justifyContent: 'center' }}
            label="Take Order"
            variant="textOnly"
          />
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
            // coordinate={{latitude: -2.9827408624367266, longitude: 104.73565857635109}}
            coordinate={markerUserPosition}
            title="Your Location"
            description="This is your location"
          >
            <FontAwesome name="circle" size={30} color="blue" />
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

export default OrderPage
