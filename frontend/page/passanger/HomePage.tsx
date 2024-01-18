import {
  Button,
  Center,
  HStack,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
  useToast,
} from 'native-base'
import React, { useEffect } from 'react'
import Logo from '../../components/atoms/Logo'
import { Entypo } from '@expo/vector-icons'
import AtomButton from '../../components/atoms/AtomButton'
import AtomCard from '../../components/atoms/AtomCard'
import { Header } from '../../components/molecules/passanger/home/Header'
import { useNavigationState } from '../../store/useNavigationState'
import { usePositionState } from '../../store/usePositionState'
import { getDetailLocation, getUserLocation } from '../../utils/location'
import { LatLng } from 'react-native-maps'

const HomePage = () => {
  const { setActivity } = useNavigationState()
  const {
    markerDestination,
    markerUserPosition,
    setMarkerDestination,
    setMarkerUserPosition,
    setUserPositionName,
  } = usePositionState()

  const toast = useToast()

  // init user location
  useEffect(() => {
    getUserLocation().then(async (response) => {
      setMarkerUserPosition(response as LatLng)
    })
  }, [])

  useEffect(() => {
    const getData = async () => {
      toast.show({
        zIndex: 2,
        title: 'Please wait...',
        description: 'Trying to find your location',
        bg: 'primary.300',
        placement: 'top',
      })

      await getDetailLocation(
        markerUserPosition?.latitude as number,
        markerUserPosition?.longitude as number,
      ).then((userLocation) => {
        const placeName = userLocation?.split(', ').slice(0, 2).join(', ')
        setUserPositionName(placeName)
      })

      toast.show({
        zIndex: 2,
        title: 'Successfully found your location',
        bg: 'primary.300',
        placement: 'top',
      })
    }
    if (markerUserPosition.latitude !== 0 && markerUserPosition.longitude !== 0)
      getData()
  }, [markerUserPosition])
  return (
    <ScrollView>
      <VStack>
        <Header />

        <VStack p={'6'} space={'6'}>
          <HStack bg={'gray.300'} rounded={'xl'} px={'5'} py={'2.5'}>
            <HStack flexGrow={1} alignItems={'center'} space={'3'}>
              <Entypo name="wallet" size={32} color="black" />
              <Text fontWeight={'bold'} fontSize={'md'}>
                Rp15.000
              </Text>
            </HStack>
            <Text fontSize={'md'} alignSelf={'center'}>
              10 Points
            </Text>
          </HStack>

          <AtomCard
            imageSource={require('../../assets/images/hero-ngojek.png')}
            title="We will take you to your destination"
            description="Earn points from each order for discounts on your next order."
            buttonText="Order"
            buttonOnPress={() => setActivity('passengerOrder')}
          />

          <AtomCard
            flip
            title="Top up now to make payments easier"
            buttonText="Top Up"
            description="Practical and easy to use, supports many platforms"
            imageSource={require('../../assets/images/hero-grip-phone.png')}
          />
        </VStack>
      </VStack>
    </ScrollView>
  )
}

export default HomePage
