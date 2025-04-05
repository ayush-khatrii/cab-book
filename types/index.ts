export type OutOfStationTab = 'oneway' | 'roundtrip' | 'multicity';
export type MainTab = 'outofstation' | 'local' | 'transfer' | 'selfdrive';

export type OUTOFSTATION = {
  mainTab: MainTab;
  setMainTab: (tab: MainTab) => void;

  selectedTab: OutOfStationTab;
  setSelectedTab: (tab: OutOfStationTab) => void;

  onewayData: OUTOFSTATION_ONEWAY;
  roundtripData: OUTOFSTATION_ROUNDTRIP;
  multicityData: OUTOFSTATION_MULTICITY;

  setOnewayData: (data: Partial<OUTOFSTATION_ONEWAY>) => void;
  setRoundTripData: (data: Partial<OUTOFSTATION_ROUNDTRIP>) => void;
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

export interface LocalCityStore {
  pickUp: string;
  time: string;
  date: Date;
  package: string;

  setLocalData: (data: Partial<Omit<LocalCityStore, 'setLocalData'>>) => void;
}