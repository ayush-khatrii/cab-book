import { TRANSFER } from "@/types";
import { create } from 'zustand'

export const useTransferStore = create<TRANSFER>()((set) => ({
  pickUp: "",
  date: new Date(),
  time: "",
  dropLocation: "",
  setTransferData: (data: Partial<TRANSFER>) => set((state) => ({
    ...state,
    ...data
  }), false),
}));