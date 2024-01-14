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
import React, { useEffect, useState } from 'react'
import MapView, { LatLng, Marker, Polyline } from 'react-native-maps'
import AtomButton from '../../components/atoms/AtomButton'
import { getDetailLocation, getUserLocation } from '../../utils/getUserLocation'

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
  const [searchText, setSearchText] = useState<string>('')
  const [userLocationText, setUserLocationText] = useState<string>('')
  const [isOnFocus, setIsOnFocus] = useState<boolean>(false)
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([])
  const [markerPosition, setMarkerPosition] = useState({
    latitude: -2.9795632354026687,
    longitude: 104.73118403682665,
  })
  const [markerUserPosition, setMarkerUserPosition] = useState({
    latitude: 0,
    longitude: 0,
  })
  const [mapRegion, setMapRegion] = useState({
    latitude: markerPosition.latitude,
    longitude: markerPosition.longitude,
    latitudeDelta: 0.003,
    longitudeDelta: 0.003,
  })
  const [polylineCoordinates, setPolylineCoordinates] = useState<LatLng[]>([])

  const toast = useToast()

  const data: { hasilPencarian: SearchResultItem[] } = {
    hasilPencarian: [
      {
        name: 'Mie Gacoan Demang',
        address: 'Jalan Contoh 123, Palembang',
        types: ['restaurant'],
        geometry: {
          location: { lat: -2.9626733953261573, lng: 104.73722714939048 },
        },
      },
      {
        name: 'Kafe B',
        address: 'Jalan Contoh 456, Jakarta',
        types: ['cafe'],
        geometry: {
          location: { lat: -6.209, lng: 106.8482 },
        },
      },
    ],
  }

  const handleSearch = (text: string) => {
    setSearchText(text)

    // Perform the search and update the results
    const results = data.hasilPencarian.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    )

    setSearchResults(results)
  }

  useEffect(() => {
    setMapRegion({
      latitude: markerPosition.latitude,
      longitude: markerPosition.longitude,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003,
    })
  }, [markerPosition])

  useEffect(() => {
    toast.show({
      title: 'Please wait...',
      description: 'Try find your location',
      bg: 'primary.300',
      placement: 'bottom',
    })
    getUserLocation().then((response) => {
      getDetailLocation(
        response?.latitude as number,
        response?.longitude as number,
      ).then((userLocation) =>
        setUserLocationText(userLocation.split(', ').slice(0, 2).join(', ')),
      )

      setMarkerUserPosition({
        latitude: response?.latitude as number,
        longitude: response?.longitude as number,
      })

      setMapRegion({
        latitude: response?.latitude as number,
        longitude: response?.longitude as number,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      })

      toast.show({
        title: 'Success find your location',
        bg: 'primary.300',
        placement: 'bottom',
      })
    })
  }, [])

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
          <VStack w={'full'} bg={'white'} rounded={'3xl'} p={'5'} shadow={'6'}>
            <Input
              borderWidth={'0'}
              placeholder="Finding your location..."
              editable={false}
              value={userLocationText}
            />
            <View w={'full'} h={'0.5'} bg={'gray.400'} />
            <Input
              borderWidth={'0'}
              placeholder="Search for destination..."
              value={searchText}
              onChangeText={handleSearch}
              onFocus={() => {
                setIsOnFocus(true)
              }}
            />
            {/* Display search results in a FlatList */}
            {isOnFocus && (
              <FlatList
                data={searchResults}
                renderItem={({ item }: { item: SearchResultItem }) => (
                  <Pressable
                    h={'10'}
                    onPress={() => {
                      setSearchText(item.name)
                      setMarkerPosition({
                        latitude: item.geometry.location.lat,
                        longitude: item.geometry.location.lng,
                      })

                      setPolylineCoordinates([
                        {
                          latitude: markerUserPosition.latitude,
                          longitude: markerUserPosition.longitude,
                        },
                        {
                          latitude: item.geometry.location.lat,
                          longitude: item.geometry.location.lng,
                        },
                      ])
                      setIsOnFocus(false)
                    }}
                    android_ripple={{ color: 'grey', borderless: true }}
                    style={({ pressed }) => ({
                      backgroundColor: pressed ? 'grey' : 'transparent',
                      padding: 1,
                      borderRadius: 1,
                      marginVertical: 1,
                    })}
                  >
                    <Text>{item.name}</Text>
                  </Pressable>
                )}
                keyExtractor={(item: SearchResultItem) => item.name}
              />
            )}
          </VStack>
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
                coordinate={markerPosition}
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

              {/* ! if want the line follow the road */}

              {/* import MapViewDirections from '@react-native-mapbox-directions/react-native-mapbox-directions';*/}
              {/* <MapViewDirections
                origin={markerUserPosition}
                destination={markerPosition}
                apikey={YOUR_GOOGLE_API_KEY}
                strokeWidth={2}
                strokeColor="blue"
              /> */}
            </MapView>
          </View>
        </Container>

        <Container w={'full'}>
          <AtomButton
            bg={'primary.700'}
            label="Order Driver"
            variant="textOnly"
            style={{ justifyContent: 'center' }}
          />
        </Container>
      </VStack>
    </Box>
  )
}

export default OrderPage
