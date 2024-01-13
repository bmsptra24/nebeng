import { create } from 'zustand'

type TActivity = 'default' | 'passengerOrder'

interface TState {
  selectedPage: number
  activity: TActivity
  setSelectedPage: (status: number) => void
  setActivity: (activity: TActivity) => void
}

export const useNavigationState = create<TState>((set) => ({
  selectedPage: 0,
  activity: 'default',
  setSelectedPage: (status: number) => set({ selectedPage: status }),
  setActivity: (activity: TActivity) => set({ activity: activity }),
}))
