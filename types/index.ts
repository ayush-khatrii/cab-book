export type OUTOFSTATION = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;

  mainTab: string;
  setMainTab: (tab: string) => void;

  // oneway
  onewayData: OUTOFSTATION_ONEWAY;
  setOnewayData: (data: Partial<OUTOFSTATION_ONEWAY>) => void;

  // roundtrip
  roundtripData: OUTOFSTATION_ROUNDTRIP;
  setRoundTripData: (data: Partial<OUTOFSTATION_ROUNDTRIP>) => void;

  // multicity
  multicityData: OUTOFSTATION_MULTICITY;
  setMultiCityData: (data: Partial<OUTOFSTATION_MULTICITY>) => void;
  addCity: (city: string) => void;
  removeCity: (city: string) => void;
}

export type OUTOFSTATION_ONEWAY = {
  pickUp: string;
  dropOff: string;
  time: string;
  date: Date;
}
export type OUTOFSTATION_ROUNDTRIP = {
  pickUp: string;
  dropOff: string;
  fromDate: Date;
  toDate: Date;
  time: string;
}
export type OUTOFSTATION_MULTICITY = {
  pickUp: string;
  fromDate: Date;
  toDate: Date;
  time: string;
  cities: string[];
}

export type FormData = {
  pickUp: string;
  dropOff: string;
  time: string;
  fromDate: Date;
  toDate: Date;
  date: Date;
  cities: string[];
  type: "oneway" | "outofstation" | "multicity" | "roundtrip" | "local" | "transfer" | "selfdrive";
}