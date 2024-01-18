import { LatLng } from 'react-native-maps'
import { create } from 'zustand'

interface TState {
  markerDestination: {
    latitude: number
    longitude: number
  }
  destinationName: string
  userLocationName: string
  markerUserPosition: {
    latitude: number
    longitude: number
  }
  polylineCoordinates: LatLng[]
  setMarkerDestination: (marker: {
    latitude: number
    longitude: number
  }) => void
  setMarkerUserPosition: (marker: {
    latitude: number
    longitude: number
  }) => void
  setDestinationName: (name: string) => void
  setUserPositionName: (name: string) => void
  setPolylineCoordinates: (coordinates: LatLng[]) => void
}

export const usePositionState = create<TState>((set) => ({
  markerDestination: {
    latitude: 0,
    longitude: 0,
  },
  markerUserPosition: {
    latitude: 0,
    longitude: 0,
  },
  destinationName: '',
  userLocationName: '',
  polylineCoordinates: [],
  setMarkerDestination: (marker) => set({ markerDestination: marker }),
  setMarkerUserPosition: (marker) => set({ markerUserPosition: marker }),
  setDestinationName: (name) => set({ destinationName: name }),
  setUserPositionName: (name) => set({ userLocationName: name }),
  setPolylineCoordinates: (coordinates) =>
    set({ polylineCoordinates: coordinates }),
}))
