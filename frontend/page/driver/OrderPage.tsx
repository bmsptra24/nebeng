import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons'
import { Box, HStack, Text, VStack, View } from 'native-base'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { usePositionState } from '../../store/usePositionState'
import AtomButton from '../../components/atoms/AtomButton'
import { useNavigationState } from '../../store/useNavigationState'

const OrderPage = () => {
  const { setActivity } = useNavigationState()

  const [step, setStep] = useState<'take-order' | 'finish-order'>('take-order')

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

  const FooterTakeOrder = () => (
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
        onPress={() => {
          setStep('finish-order')
        }}
      />
    </VStack>
  )

  const FooterFinishOrder = () => (
    <VStack
      bg={'white'}
      p={'5'}
      rounded={'2xl'}
      shadow={'6'}
      m={'5'}
      space={'2'}
    >
      <HStack justifyContent={'space-between'}>
        <HStack space={'2'} alignItems={'center'}>
          <MaterialIcons name="supervisor-account" size={40} color="black" />
          <VStack space={0}>
            <Text fontSize={'xs'}>Ordered by</Text>
            <Text fontSize={'md'} fontWeight={'bold'}>
              Olie Neolie
            </Text>
          </VStack>
        </HStack>
        <HStack space={'3'}>
          <Ionicons name="chatbox-ellipses" size={38} color="black" />
          <FontAwesome5 name="money-bill-wave" size={30} color="black" />
        </HStack>
      </HStack>

      <HStack>
        <Entypo name="location-pin" size={35} color="black" />

        <VStack>
          <Text fontSize={'xs'}>Destination</Text>
          <Text fontSize={'lg'}>Bukit Lama</Text>
          <Text fontSize={'xs'}>
            2P8J+RX Bukit Lama{'\n'}Palembang City, South Sumatera
          </Text>
        </VStack>
      </HStack>

      <HStack justifyContent={'space-between'}>
        <Text fontSize={'xl'}>Price</Text>
        <Text fontSize={'xl'}>Rp7.000</Text>
      </HStack>

      <AtomButton
        bg={'primary.200'}
        style={{ justifyContent: 'center' }}
        label="Finish Order"
        variant="textOnly"
        onPress={() => {
          setActivity('default')
        }}
      />
    </VStack>
  )

  return (
    <VStack h={'full'} position={'relative'}>
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

      {/* page */}
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

        {/* footer */}
        {step === 'take-order' ? <FooterTakeOrder /> : <FooterFinishOrder />}
      </VStack>
    </VStack>
  )
}

export default OrderPage
