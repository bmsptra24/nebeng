import axios from 'axios'
import * as Location from 'expo-location'
import { baseUrl } from '../config'

export const getUserLocation = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      console.error('Izin lokasi tidak diberikan')
      return
    }

    const location = await Location.getCurrentPositionAsync({})

    const { latitude, longitude } = location.coords

    return { latitude, longitude }
  } catch (error) {
    console.error('Error mendapatkan lokasi:', error)
  }
}

export async function getDetailLocation(lat: number, lon: number) {
  try {
    const serverUrl = baseUrl + 'getDetailLocation'
    const response = await axios.get(serverUrl, {
      params: {
        lat: lat,
        lon: lon,
      },
    })

    // Tanggapi dari server
    const data = response.data

    // if ('address' in data) {
    //   console.log('Alamat:', data.display_name)
    // } else {
    //   console.log('Tidak ada hasil.')
    // }
    return data?.display_name
  } catch (error) {
    if (error instanceof Error) console.error('Error:', error.message)
  }
}

export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number => {
  const R = 6371 // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c // Distance in kilometers
  return distance
}
