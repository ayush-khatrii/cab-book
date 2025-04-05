// store/outofstation.ts
import { create } from 'zustand';
import {
  MainTab,
  OutOfStationTab,
  OUTOFSTATION
} from '@/types';

export const useOutOfStationStore = create<OUTOFSTATION>((set) => ({
  mainTab: 'outofstation',
  setMainTab: (tab: MainTab) => set({ mainTab: tab }),

  selectedTab: 'oneway',
  setSelectedTab: (tab: OutOfStationTab) => set({ selectedTab: tab }),

  onewayData: {
    pickUp: "",
    dropOff: "",
    time: "",
    date: new Date()
  },

  roundtripData: {
    pickUp: "",
    dropOff: "",
    fromDate: new Date(),
    toDate: new Date(),
    time: ""
  },

  multicityData: {
    pickUp: "",
    fromDate: new Date(),
    toDate: new Date(),
    time: "",
    cities: []
  },

  setOnewayData: (data) => set((state) => ({
    onewayData: { ...state.onewayData, ...data }
  }), false),

  setRoundTripData: (data) => set((state) => ({
    roundtripData: { ...state.roundtripData, ...data }
  }), false),

  setMultiCityData: (data) => set((state) => ({
    multicityData: { ...state.multicityData, ...data }
  }), false),

  addCity: (city) => set((state) => ({
    multicityData: {
      ...state.multicityData,
      cities: [...state.multicityData.cities, city]
    }
  })),

  removeCity: (city) => set((state) => ({
    multicityData: {
      ...state.multicityData,
      cities: state.multicityData.cities.filter((c) => c !== city)
    }
  }))
}));