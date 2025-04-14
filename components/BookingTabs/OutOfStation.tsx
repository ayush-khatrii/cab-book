import DatePickerInput from "../ui/DatePicker"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { MapPin } from "lucide-react"
import TimeInput from "../ui/time-input"
import Multiselect from "../ui/multiselect"
import { useOutOfStationStore } from "@/store/outofstation"
import { useCallback, useEffect } from "react"

const OutOfStation = () => {
  const {
    selectedTab,
    onewayData,
    roundtripData,
    multicityData,
    addCity,
    removeCity
  } = useOutOfStationStore();

  const setOnewayData = useOutOfStationStore(state => state.setOnewayData);
  const setRoundTripData = useOutOfStationStore(state => state.setRoundTripData);
  const setMultiCityData = useOutOfStationStore(state => state.setMultiCityData);

  const handleChange = useCallback((formUpdater: (data: any) => void, field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    formUpdater({ [field]: e.target.value });
  }, []);


  // Handle adding a city to multicityData
  const handleAddCity = (city: string) => {
    addCity(city);
  };

  const handleRemoveCity = (city: string) => {
    removeCity(city);
  };

  switch (selectedTab) {
    case "oneway":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 mt-10 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Pick-up City</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                name="pickUp"
                placeholder="Surat, Gujarat"
                value={onewayData.pickUp}
                onChange={handleChange(setOnewayData, 'pickUp')}
                className="pl-10 rounded-lg border-accent-foreground/10"

              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Drop-off City</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                name="dropOff"
                className="pl-10"
                placeholder="Gandhidham, Gujarat"
                value={onewayData.dropOff}
                onChange={handleChange(setOnewayData, 'dropOff')}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Travel Date</Label>
            <div className="relative">
              <DatePickerInput
                name="date"
                onChange={(dt) => setOnewayData({ date: dt })}
                value={onewayData.date}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Travel Time</Label>
            <div className="relative">
              <TimeInput
                name="time"
                onChange={(time) => setOnewayData({ time })}
              />
            </div>
          </div>
        </div>
      );

    case "roundtrip":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Pick-up City</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                name="pickUp"
                className="pl-10"
                placeholder="Surat, Gujarat"
                value={roundtripData.pickUp}
                onChange={handleChange(setRoundTripData, 'pickUp')}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Drop-off City</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                name="dropOff"
                className="pl-10"
                placeholder="Gandhidham, Gujarat"
                value={roundtripData.dropOff}
                onChange={handleChange(setRoundTripData, 'dropOff')}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">From Date</Label>
            <div className="relative">
              <DatePickerInput
                name="fromDate"
                onChange={(fromDate) => setRoundTripData({ fromDate })}
                value={roundtripData.fromDate}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">To Date</Label>
            <div className="relative">
              <DatePickerInput
                name="toDate"
                onChange={(toDate) => setRoundTripData({ toDate })}
                value={roundtripData.toDate}
              />
            </div>
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label className="text-sm font-medium">Pick-up Time</Label>
            <div className="relative">
              <TimeInput
                name="time"
                onChange={(time) => setRoundTripData({ time })}
              />
            </div>
          </div>
        </div>
      );

    case "multicity":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 mt-10 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Pick-up City</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                name="pickUp"
                className="pl-10"
                placeholder="Ahmedabad, Gujarat"
                value={multicityData.pickUp}
                onChange={handleChange(setMultiCityData, 'pickUp')}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">From Date</Label>
            <div className="relative">
              <DatePickerInput
                name="fromDate"
                onChange={(fromDate) => setMultiCityData({ fromDate })}
                value={multicityData.fromDate}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">To Date</Label>
            <div className="relative">
              <DatePickerInput
                name="toDate"
                onChange={(toDate) => setMultiCityData({ toDate })}
                value={multicityData.toDate}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Pick-up Time</Label>
            <div className="relative">
              <TimeInput
                name="time"
                onChange={(time) => setMultiCityData({ time })}
              />
            </div>
          </div>
          <div className="md:col-span-2 mt-1">
            <Label className="text-sm font-medium">To (add cities)</Label>
            <Multiselect
              cities={multicityData.cities}
              onCitiesChange={(newCities) => {
                setMultiCityData({ cities: newCities });
              }}
              onAddCity={handleAddCity}
              onRemoveCity={handleRemoveCity}
            />
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default OutOfStation;