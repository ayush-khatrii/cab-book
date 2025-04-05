// "use client";
// import { MapPin } from "lucide-react";
// import DatePickerInput from "../ui/DatePicker";
// import { Input } from "../ui/input";
// import { Label } from "../ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
// import TimeInput from "../ui/time-input";
// import { packages } from "@/constants";

// const Local = () => {
//   return (
//     <>
//       <p className="text-accent-foreground text-center">Find a quick local ride nearby.</p>
//       <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 mt-10 gap-4">
//         <div className="space-y-2">
//           <Label className="text-sm font-medium">Pick-up City</Label>
//           <div className="relative">
//             <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//             <Input className="pl-10" placeholder="Ahmedabad, Gujarat" />
//           </div>
//         </div>
//         <div className="space-y-2">
//           <Label className="text-sm font-medium">Select Package</Label>
//           <div className="relative">
//             <Select>
//               <SelectTrigger className="w-full">
//                 <SelectValue placeholder="Select Package" />
//               </SelectTrigger>
//               <SelectContent>
//                 {
//                   packages.map((item) => (
//                     <SelectItem key={item.id} value={item.timeTravel}>{item.timeTravel}</SelectItem>
//                   ))
//                 }
//               </SelectContent>
//             </Select>

//           </div>
//         </div>
//         <div className="space-y-2">
//           <Label className="text-sm font-medium">Travel Date</Label>
//           <div className="relative">
//             <DatePickerInput
//               onChange={(fromDate) => setRoundTripData({ fromDate })}
//               value={roundtripData.fromDate}
//             />
//           </div>
//         </div>
//         <div className="space-y-2">
//           <Label className="text-sm font-medium">Pick-up Time</Label>
//           <div className="relative">
//             <TimeInput />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Local