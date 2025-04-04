import { OUTOFSTATION } from '@/types'
import { create } from 'zustand'

export const useOutOfStationStore = create<OUTOFSTATION>()((set) => ({
  mainTab: "outofstation",
  setMainTab: (tab: string) => set({ mainTab: tab }),
  selectedTab: "oneway",
  setSelectedTab: (tab) => set({ selectedTab: tab }),
  onewayData: {
    pickUp: "",
    date: new Date(),
    dropOff: "",
    time: ""
  },
  setOnewayData: (data) =>
    set((state) => ({
      onewayData: { ...state.onewayData, ...data },
    })),
  roundtripData: {
    pickUp: "",
    fromDate: new Date(),
    toDate: new Date(),
    dropOff: "",
    time: ""
  },
  setRoundTripData: (data) =>
    set((state) => ({
      roundtripData: { ...state.roundtripData, ...data }
    })),
  multicityData: {
    pickUp: "",
    dropOff: "",
    fromDate: new Date(),
    toDate: new Date(),
    time: "",
    cities: []
  },
  setMultiCityData: (data) =>
    set((state) => ({
      multicityData: { ...state.multicityData, ...data }
    })),
  addCity: (city: string) =>
    set((state) => ({
      multicityData: {
        ...state.multicityData,
        cities: [...state.multicityData.cities, city]
      }
    })),
  removeCity: (city: string) =>
    set((state) => ({
      multicityData: {
        ...state.multicityData,
        cities: state.multicityData.cities.filter((c) => c !== city)
      }
    }))
}))