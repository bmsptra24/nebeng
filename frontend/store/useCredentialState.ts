import { create } from 'zustand'
import { UserData } from '../types/api'

interface TState {
  userData: UserData | null
  token: string | null
  setUserData: (data: UserData | null) => void
  setToken: (token: string | null) => void
}

export const useCredentialState = create<TState>((set) => ({
  userData: null,
  token: null,
  setUserData: (data: UserData | null) => set({ userData: data }),
  setToken: (token: string | null) => set({ token: token }),
}))
