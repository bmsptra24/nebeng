import React, { useState, useEffect } from 'react'
import { Input, View, FlatList, Pressable, Text, HStack } from 'native-base'
import { LatLng } from 'react-native-maps'
import { usePositionState } from '../../../../store/usePositionState'
import { Entypo } from '@expo/vector-icons'

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

const AtomBoxInputOrder: React.FC = () => {
  const [userLocationText, setUserLocationText] = useState<string>('')
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false)
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([])

  const searchData = {
    results: [
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

  const {
    markerUserPosition,
    setMarkerDestination,
    userLocationName,
    destinationName,
    setPolylineCoordinates,
    setDestinationName,
  } = usePositionState()

  const handleSearch = (text: string) => {
    setDestinationName(text)

    // Perform the search and update the results
    const results = searchData.results.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    )

    setSearchResults(results)
  }

  return (
    <View w={'full'} bg={'white'} rounded={'3xl'} p={'5'} shadow={'6'}>
      <HStack alignItems={'center'}>
        <Entypo name="location-pin" size={24} color="red" />
        <Input
          flexGrow={1}
          borderWidth={'0'}
          placeholder="Find your location"
          editable={false}
          onPressIn={() => {
            // if (userLocationText === '') findUserLocation()
          }}
          value={userLocationName}
        />
      </HStack>
      <View w={'full'} h={'0.5'} bg={'gray.400'} />
      <HStack alignItems={'center'}>
        <Entypo name="location-pin" size={24} color="blue" />
        <Input
          borderWidth={'0'}
          placeholder="Search for destination..."
          value={destinationName}
          onChangeText={handleSearch}
          onFocus={() => {
            setIsSearchFocused(true)
          }}
        />
      </HStack>

      {/* Display search results in a FlatList */}
      {isSearchFocused && (
        <FlatList
          data={searchResults}
          renderItem={({ item }: { item: SearchResultItem }) => (
            <Pressable
              h={'10'}
              onPress={() => {
                setDestinationName(item.name)
                setDestinationName(item.name)
                handlePressSearchResult(
                  item,
                  setMarkerDestination,
                  setPolylineCoordinates,
                  setIsSearchFocused,
                  markerUserPosition,
                )
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
    </View>
  )
}

const handlePressSearchResult = (
  item: SearchResultItem,
  setMarkerDestination: (marker: {
    latitude: number
    longitude: number
  }) => void,
  setPolylineCoordinates: (coordinates: LatLng[]) => void,
  setisSearchFocused: React.Dispatch<React.SetStateAction<boolean>>,
  markerUserPosition: LatLng,
) => {
  setMarkerDestination({
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

  setisSearchFocused(false)
}

export default AtomBoxInputOrder
