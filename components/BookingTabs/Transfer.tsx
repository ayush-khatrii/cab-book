import { MapPin } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import DatePickerInput from "../ui/DatePicker";
import TimeInput from "../ui/time-input";
import { useTransferStore } from "@/store/transfer";

const Transfer = () => {

  const setTransferData = useTransferStore(state => state.setTransferData);
  const pickUp = useTransferStore(state => state.pickUp);
  const date = useTransferStore(state => state.date);
  const time = useTransferStore(state => state.time);
  const dropLocation = useTransferStore(state => state.dropLocation);



  return (
    <>
      <p className="text-accent-foreground text-center">Get seamless transfer services.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 mt-10 gap-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Pick-up Location</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              name="pickup"
              value={pickUp}
              onChange={(e) => setTransferData({ pickUp: e.target.value })}
              className="pl-10" placeholder="Ahmedabad, Gujarat" />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium">Drop-off Location</Label>
          <div className="relative">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                name="dropLocation"
                value={dropLocation}
                onChange={(e) => setTransferData({ dropLocation: e.target.value })}
                className="pl-10" placeholder="Ahmedabad, Airport" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium">Travel Date</Label>
          <div className="relative">
            <DatePickerInput
              name="date"
              value={date}
              onChange={(dt) => setTransferData({ date: dt })}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium">Pick-up Time</Label>
          <div className="relative">
            <TimeInput
              name='time'
              onChange={(t) => setTransferData({ time: t })}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Transfer;