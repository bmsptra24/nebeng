import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import {
  Box,
  Container,
  FlatList,
  HStack,
  Input,
  Pressable,
  Text,
  VStack,
  View,
  useToast,
} from 'native-base'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { LatLng, Marker, Polyline } from 'react-native-maps'
import AtomButton from '../../components/atoms/AtomButton'
import {
  calculateDistance,
  getDetailLocation,
  getUserLocation,
} from '../../utils/location'
import { useNavigationState } from '../../store/useNavigationState'
import { usePositionState } from '../../store/usePositionState'
import AtomBoxInputOrder from '../../components/molecules/passanger/order/AtomBoxInputOrder'

// Define an interface for the search result items
interface SearchResultItem {
  name: string
  address: string
  types: string[]
  geometry: {
    location: {
      lat: number
      lng: number
    }
  }
}

const OrderPage = () => {
  const { setActivity } = useNavigationState()
  const {
    markerDestination,
    markerUserPosition,
    polylineCoordinates,
    setMarkerUserPosition,
  } = usePositionState()

  const isInputEmpty = useRef(false)

  const [mapRegion, setMapRegion] = useState({
    latitude: markerDestination.latitude,
    longitude: markerDestination.longitude,
    latitudeDelta: 0.003,
    longitudeDelta: 0.003,
  })

  useEffect(() => {
    setMapRegion({
      latitude: markerDestination.latitude,
      longitude: markerDestination.longitude,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003,
    })
  }, [markerDestination])

  useEffect(() => {
    setMarkerUserPosition({
      latitude: markerUserPosition?.latitude as number,
      longitude: markerUserPosition?.longitude as number,
    })

    setMapRegion({
      latitude: markerUserPosition?.latitude as number,
      longitude: markerUserPosition?.longitude as number,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003,
    })
  }, [])

  useEffect(() => {
    isInputEmpty.current =
      markerDestination.latitude === 0 ||
      markerDestination.longitude === 0 ||
      markerUserPosition.latitude === 0 ||
      markerUserPosition.longitude === 0
  }, [markerUserPosition, markerDestination])

  console.log({ isInputEmpty, markerDestination, markerUserPosition })

  return (
    <Box position={'relative'}>
      <Box
        w={'full'}
        h={'64'}
        roundedBottom={56}
        shadow={'6'}
        bg={'primary.300'}
        position={'absolute'}
        safeAreaTop
      ></Box>

      <VStack
        w={'full'}
        h={'full'}
        space={'5'}
        alignItems={'center'}
        pb={'5'}
        safeArea
      >
        <Container w={'full'} h={'72'} justifyContent={'space-between'}>
          <HStack
            w={'full'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Ionicons name="chevron-back" size={40} color="white" />
            <Text fontSize={'4xl'} fontWeight={'semibold'} color={'white'}>
              Order
            </Text>
            <Ionicons name="chevron-back" size={40} color="transparent" />
          </HStack>

          <Text fontSize={'xl'} color={'white'}>
            Heyoo, Olie{'\n'}where are you going today?
          </Text>
          <AtomBoxInputOrder />
        </Container>

        <Container
          w={'full'}
          flexGrow={1}
          rounded={'3xl'}
          shadow={'6'}
          bg={'amber.400'}
          overflow={'hidden'}
        >
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
              <Marker
                coordinate={markerDestination}
                title="Your Location"
                description="This is your location"
              >
                <FontAwesome5 name="map-marker" size={36} color="red" />
              </Marker>

              <Marker
                coordinate={markerUserPosition}
                title="Your Location"
                description="This is your location"
              >
                <FontAwesome name="circle" size={30} color="blue" />
              </Marker>

              {/* Add Polyline component */}
              <Polyline
                coordinates={polylineCoordinates}
                strokeColor="blue"
                strokeWidth={2}
              />
            </MapView>
          </View>
        </Container>

        <Container w={'full'}>
          <AtomButton
            disable={isInputEmpty.current}
            bg={isInputEmpty.current ? 'secondary.500' : 'primary.700'}
            label="Order Driver"
            variant="textOnly"
            style={{ justifyContent: 'center' }}
            onPress={() => setActivity('passangerPrice')}
          />
        </Container>
      </VStack>
    </Box>
  )
}

export default OrderPage
