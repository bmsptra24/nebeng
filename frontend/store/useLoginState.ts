import { create } from 'zustand'

interface TState {
  email: string
  password: string
  setEmail: (email: string) => void
  setPassword: (password: string) => void
}

export const useLoginState = create<TState>((set) => ({
  email: '',
  password: '',
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
}))
