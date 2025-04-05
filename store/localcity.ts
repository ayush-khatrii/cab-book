import { LOCAL_CITY } from "@/types";
import { create } from 'zustand'

export const useLocalCityStore = create<LOCAL_CITY>()((set) => ({
  pickUp: "",
  package: "",
  date: new Date(),
  time: "",
  setLocalData: (data: Partial<LOCAL_CITY>) => set((state) => ({
    ...state,
    ...data
  }), false),
}));