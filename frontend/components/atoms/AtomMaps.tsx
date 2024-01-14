import { Container } from 'native-base'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MapView, { Marker, LatLng } from 'react-native-maps'

interface AtomMapsProps {}

const AtomMaps: React.FC<AtomMapsProps> = () => {
  const [selectedLocation, setSelectedLocation] = useState<LatLng | null>(null)

  const handleMapPress = (event: any) => {
    const { coordinate } = event.nativeEvent
    setSelectedLocation(coordinate)
  }

  const handleSetLocation = () => {
    if (selectedLocation) {
      // Lakukan sesuatu dengan lokasi yang telah dipilih, misalnya menyimpannya atau mengirimkannya ke server
      console.log('Selected Location:', selectedLocation)
    }
  }

  return (
    <Container w={'full'} flexGrow={1}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -6.2088,
          longitude: 106.8456,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handleMapPress}
      >
        {selectedLocation && (
          <Marker coordinate={selectedLocation} title="Selected Location" />
        )}
      </MapView>
      <View style={{ alignItems: 'center', padding: 16 }}>
        <TouchableOpacity onPress={handleSetLocation}>
          <Text>Set Location</Text>
        </TouchableOpacity>
      </View>
    </Container>
  )
}

export default AtomMaps
