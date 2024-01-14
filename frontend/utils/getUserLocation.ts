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
    console.log({ location })

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
