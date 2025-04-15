
"use client";
import React, { useState } from 'react';
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "./ui/label";
import { ArrowRight, MapPin, Calendar, Clock, Car } from "lucide-react";
import { Input } from "./ui/input";
import TimeInput from './ui/time-input';
import DatePickerInput, { Value } from './ui/DatePicker';
import OutOfStation from './BookingTabs/OutOfStation';
import { useOutOfStationStore } from '@/store/outofstation';
import { format } from "date-fns";
import { MainTab } from '@/types';
import LocalCity from './BookingTabs/LocalCity';
import { useLocalCityStore } from '@/store/localcity';
import Transfer from './BookingTabs/Transfer';
import { useTransferStore } from '@/store/transfer';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { FaCarSide } from "react-icons/fa";
import { useRouter } from 'next/navigation';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FaLocationArrow, FaRoute } from 'react-icons/fa6';

const BookCab = () => {
  const [date, setDate] = useState<Value>(new Date());
  const { setSelectedTab, selectedTab, mainTab, setMainTab, onewayData, roundtripData, multicityData } = useOutOfStationStore();
  const { date: localCityDate, package: localCityPackage, pickUp: localCityPickUp, time: localCityTime } = useLocalCityStore();
  const { date: transferDate, pickUp: transferPickUp, dropLocation: transferDropLocation, time: transferTime } = useTransferStore();
  const router = useRouter();
  const [totalAdultPassengers, setTotalAdultPassengers] = useState(0);
  const [totalChildPassengers, setTotalChildPassengers] = useState(0);
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const createQueryParams = (params: Record<string, string>) => {
      const queryParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value) queryParams.append(key, value);
      });
      return queryParams.toString();
    };

    if (mainTab === "outofstation") {
      if (selectedTab === "oneway") {
        // One-way trip parameters
        const params = {
          fromCity: onewayData.pickUp || "",
          toCity: onewayData.dropOff || "",
          travelType: "One-way",
          travelDate: onewayData.date ? format(onewayData.date, 'yyyy-MM-dd') : "",
          travelTime: onewayData.time || "",
          adultPassengers: totalAdultPassengers.toString(),
          childPassengers: totalChildPassengers.toString(),
          mobile,
          name,
          email
        };
        router.push(`/cabs?${createQueryParams(params)}`);
      }
      else if (selectedTab === "roundtrip") {
        // Round trip parameters
        const params = {
          fromCity: roundtripData.pickUp || "",
          toCity: roundtripData.dropOff || "",
          travelType: "Round Trip",
          travelDateStart: roundtripData.fromDate ? format(roundtripData.fromDate, 'yyyy-MM-dd') : "",
          travelDateEnd: roundtripData.toDate ? format(roundtripData.toDate, 'yyyy-MM-dd') : "",
          travelTime: roundtripData.time || "",
          adultPassengers: totalAdultPassengers.toString(),
          childPassengers: totalChildPassengers.toString(),
          returnJourney: "true",
          mobile,
          name,
          email
        };
        router.push(`/cabs?${createQueryParams(params)}`);
      }
      else if (selectedTab === "multicity") {
        // Multi-city trip parameters
        const params = {
          fromCity: multicityData.pickUp || "",
          toCities: multicityData.cities ? multicityData.cities.join("|") : "",
          travelType: "Multi City",
          travelDateStart: multicityData.fromDate ? format(multicityData.fromDate, 'yyyy-MM-dd') : "",
          travelDateEnd: multicityData.toDate ? format(multicityData.toDate, 'yyyy-MM-dd') : "",
          travelTime: multicityData.time || "",
          adultPassengers: totalAdultPassengers.toString(),
          childPassengers: totalChildPassengers.toString(),
          multiCity: "true",
          mobile,
          name,
          email
        };
        router.push(`/cabs?${createQueryParams(params)}`);
      }
    }


    else if (mainTab === "local") {
      // Local city parameters
      const params = {
        fromCity: localCityPickUp || "",
        toCity: localCityPickUp || "", // Same city for local
        distance: "50", // Standard for local package
        travelType: "Local",
        travelDate: localCityDate ? format(localCityDate, 'yyyy-MM-dd') : "",
        travelTime: localCityTime || "",
        adultPassengers: totalAdultPassengers.toString(),
        childPassengers: totalChildPassengers.toString(),
        package: localCityPackage || "",
        hours: localCityPackage?.includes("8") ? "8" : localCityPackage?.includes("4") ? "4" : "12",
        mobile,
        name,
        email
      };
      router.push(`/cabs?${createQueryParams(params)}`);
    }
    else if (mainTab === "transfer") {
      // Airport transfer parameters
      const params = {
        fromCity: transferPickUp || "",
        toCity: transferDropLocation || "",
        distance: "30", // Standard for airport transfers
        travelType: "Airport Transfer",
        travelDate: transferDate ? format(transferDate, 'yyyy-MM-dd') : "",
        travelTime: transferTime || "",
        adultPassengers: totalAdultPassengers.toString(),
        childPassengers: totalChildPassengers.toString(),
        isAirport: "true",
        mobile,
        name,
        email
      };
      router.push(`/cabs?${createQueryParams(params)}`);
    }
    else if (mainTab === "selfdrive") {
      // self drive
    }
  };


  const handleSendData = (data: any) => {
    window.open(`https://wa.me/+918200450219?text=${encodeURIComponent(data)}`);
  }

  return (
    <section id='booking' className="w-full relative overflow-hidden py-16">
      <div
        className={cn(
          "absolute inset-0 -z-50",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,rgba(228,228,231,0.1)_1px,transparent_0.5px),linear-gradient(to_bottom,rgba(228,228,231,0.1)_1px,transparent_0.5px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.1)_1px,transparent_0.5px),linear-gradient(to_bottom,rgba(38,38,38,0.1)_1px,transparent_0.5px)]",
        )}
      />
      <div className="pointer-events-none -z-50 absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.5))] dark:bg-white"></div>

      <motion.div
        initial={{ x: "-10%" }}
        animate={{ x: "110%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="relative -z-10"
      >
        <FaCarSide size={30} className="text-primary" />
      </motion.div>
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side content */}
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold text-accent-foreground mb-6">Start Your Travel Booking</h1>

              <div className=" shadow-lg rounded-2xl p-6 bg-white border border-accent-foreground/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Main Tab Selection */}
                  <div className="flex">
                    <RadioGroup
                      defaultValue="outofstation"
                      className="flex flex-wrap gap-3 w-full"
                      onValueChange={(value) => {
                        setMainTab(value as MainTab);
                        if (value === "outofstation") {
                          setSelectedTab("oneway");
                        }
                      }}
                    >
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                        <label className={`group relative flex cursor-pointer items-center justify-center py-3 px-4 rounded-xl transition-all duration-200 ${mainTab === "outofstation" ? "bg-primary text-white shadow-lg shadow-primary/30" : "border hover:bg-accent-foreground/20"}`}>
                          <RadioGroupItem value="outofstation" className="sr-only" />
                          <FaRoute className="mr-2 w-4 h-4" />
                          <span className="text-sm font-medium">Outstation</span>
                        </label>

                        <label className={`group relative flex cursor-pointer items-center justify-center py-3 px-4 rounded-xl transition-all duration-200 ${mainTab === "local" ? "bg-primary text-white shadow-lg shadow-primary/30" : "border hover:bg-accent-foreground/20"}`}>
                          <RadioGroupItem value="local" className="sr-only" />
                          <MapPin className="mr-2 w-4 h-4" />
                          <span className="text-sm font-medium">Local City</span>
                        </label>

                        <label className={`group relative flex cursor-pointer items-center justify-center py-3 px-4 rounded-xl transition-all duration-200 ${mainTab === "transfer" ? "bg-primary text-white shadow-lg shadow-primary/30" : "border hover:bg-accent-foreground/20"}`}>
                          <RadioGroupItem value="transfer" className="sr-only" />
                          <FaLocationArrow className="mr-2 w-4 h-4" />
                          <span className="text-sm font-medium">Transfer</span>
                        </label>

                        <label className={`group relative flex cursor-pointer items-center justify-center py-3 px-4 rounded-xl transition-all duration-200 ${mainTab === "selfdrive" ? "bg-primary text-white shadow-lg shadow-primary/30" : "border hover:bg-accent-foreground/20"}`}>
                          <RadioGroupItem value="selfdrive" className="sr-only" />
                          <Car className="mr-2 w-4 h-4" />
                          <span className="text-sm font-medium">Self Drive</span>
                        </label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Outstation Sub Tabs */}
                  {mainTab === "outofstation" && (
                    <RadioGroup
                      defaultValue="oneway"
                      className="grid grid-cols-3 w-full border rounded-lg p-1 mb-4"
                      onValueChange={(value) => {
                        setSelectedTab(value as "oneway" | "roundtrip" | "multicity");
                      }}
                    >
                      <label className={`flex-1 cursor-pointer py-2 px-4 text-center rounded-md transition  border ${selectedTab === "oneway" ? "bg-accent-foreground/90 text-white" : "text-accent-foreground"}`}>
                        <RadioGroupItem value="oneway" className="sr-only" />
                        <span className="text-sm font-medium">Oneway</span>
                      </label>
                      <label className={`flex-1 cursor-pointer py-2 px-4 text-center rounded-md transition  border ${selectedTab === "roundtrip" ? "bg-accent-foreground/90 text-white" : "text-accent-foreground"}`}>
                        <RadioGroupItem value="roundtrip" className="sr-only" />
                        <span className="text-sm font-medium">Roundtrip</span>
                      </label>
                      <label className={` cursor-pointer py-2 px-4 text-center border  rounded-md transition ${selectedTab === "multicity" ? "bg-accent-foreground/90 text-white" : "text-accent-foreground"}`}>
                        <RadioGroupItem value="multicity" className="sr-only" />
                        <span className="text-sm font-medium">Multiple Cities</span>
                      </label>
                    </RadioGroup>
                  )}

                  {/* Tab Content */}
                  <div className="space-y-6">
                    {mainTab === "outofstation" && <OutOfStation />}
                    {mainTab === "local" && <LocalCity />}
                    {mainTab === "transfer" && <Transfer />}
                    {mainTab === "selfdrive" && (
                      <div className="space-y-6">
                        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md">
                          <div className="flex flex-col gap-2 text-center">
                            <p className="font-semibold">Self Drive Timing: <span className="font-bold">10:00 AM - 10:00 PM</span></p>
                            <p className="font-semibold">Available Locations: <span className="font-bold">Gandhidham, Anjar, Bhuj, Bhachau, Adipur (All over in kutch)   </span></p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-sm font-medium">Delivery Address</Label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input className="pl-10" placeholder="Pickup Location" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">Drive Date</Label>
                            <div className="relative">
                              <DatePickerInput
                                name="date"
                                onChange={setDate}
                                value={date}
                              />
                            </div>
                          </div>
                          <div className="space-y-2 col-span-2">
                            <Label className="text-sm font-medium">Drive Time</Label>
                            <div className="relative">
                              <TimeInput
                                name='time'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">Your Name *</Label>
                      <Input
                        name='name'
                        onChange={(e) => setName(e.target.value)}
                        type='text'
                        className=""
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">Mobile Number *</Label>
                      <Input
                        type='number'
                        onChange={(e) => setMobile(e.target.value)}
                        className=""
                        placeholder="Your Mobile Number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">Email Address *</Label>
                      <Input
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        className=""
                        placeholder="Your Email Address"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">Total Passengers *</Label>
                      <Select onValueChange={(p) => setTotalAdultPassengers(Number(p) || 0)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select total adults" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Number of Adults</SelectLabel>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Select onValueChange={(p) => setTotalChildPassengers(Number(p) || 0)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select total children" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Number of Children</SelectLabel>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary text-white py-3 rounded-lg font-medium"
                    >
                      Search Cab
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right side image */}
            <div className="absolute -z-20 top-32 hidden md:block right-0 w-full max-w-4xl">
              <img
                className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
                src="/xl6.png"
                alt="Luxury cab service vehicle"
              />
              <div className="absolute  -top-20 -right-[30rem] w-[1000px] h-[1000px] bg-primary transform rotate-12 origin-bottom-right"></div>
              <div className="absolute  -top-20 -right-[35rem] w-[1000px] h-[1000px] bg-accent-foreground/90 transform rotate-12 origin-bottom-right"></div>
            </div>
          </div>
        </div>
      </div >
    </section >
  );
};

export default BookCab;

// "use client";
// import React, { useState, useEffect } from 'react';
// import { Button } from "./ui/button";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Label } from "./ui/label";
// import { ArrowRight, MapPin, Calendar, Clock, Car, Star } from "lucide-react";
// import { Input } from "./ui/input";
// import TimeInput from './ui/time-input';
// import DatePickerInput, { Value } from './ui/DatePicker';
// import OutOfStation from './BookingTabs/OutOfStation';
// import { useOutOfStationStore } from '@/store/outofstation';
// import { format } from "date-fns";
// import { MainTab } from '@/types';
// import LocalCity from './BookingTabs/LocalCity';
// import { useLocalCityStore } from '@/store/localcity';
// import Transfer from './BookingTabs/Transfer';
// import { useTransferStore } from '@/store/transfer';
// import { cn } from '@/lib/utils';
// import { motion } from 'motion/react';
// import { FaCarSide, FaRoute, FaLocationArrow } from "react-icons/fa";
// import { useRouter } from 'next/navigation';

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// const BookCab = () => {
//   const [date, setDate] = useState<Value>(new Date());
//   const { setSelectedTab, selectedTab, mainTab, setMainTab, onewayData, roundtripData, multicityData } = useOutOfStationStore();
//   const { date: localCityDate, package: localCityPackage, pickUp: localCityPickUp, time: localCityTime } = useLocalCityStore();
//   const { date: transferDate, pickUp: transferPickUp, dropLocation: transferDropLocation, time: transferTime } = useTransferStore();
//   const router = useRouter();
//   const [totalAdultPassengers, setTotalAdultPassengers] = useState(0);
//   const [totalChildPassengers, setTotalChildPassengers] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     // Trigger car animation when tab changes
//     setIsAnimating(true);
//     const timer = setTimeout(() => setIsAnimating(false), 1500);
//     return () => clearTimeout(timer);
//   }, [mainTab, selectedTab]);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const createQueryParams = (params: Record<string, string>) => {
//       const queryParams = new URLSearchParams();
//       Object.entries(params).forEach(([key, value]) => {
//         if (value) queryParams.append(key, value);
//       });
//       return queryParams.toString();
//     };

//     if (mainTab === "outofstation") {
//       if (selectedTab === "oneway") {
//         // One-way trip parameters
//         const params = {
//           fromCity: onewayData.pickUp || "",
//           toCity: onewayData.dropOff || "",
//           travelType: "One-way",
//           travelDate: onewayData.date ? format(onewayData.date, 'yyyy-MM-dd') : "",
//           travelTime: onewayData.time || "",
//           passengers: totalAdultPassengers.toString(),
//         };
//         router.push(`/cabs?${createQueryParams(params)}`);
//       }
//       else if (selectedTab === "roundtrip") {
//         // Round trip parameters
//         const params = {
//           fromCity: roundtripData.pickUp || "",
//           toCity: roundtripData.dropOff || "",
//           travelType: "Round Trip",
//           travelDateStart: roundtripData.fromDate ? format(roundtripData.fromDate, 'yyyy-MM-dd') : "",
//           travelDateEnd: roundtripData.toDate ? format(roundtripData.toDate, 'yyyy-MM-dd') : "",
//           travelTime: roundtripData.time || "",
//           passengers: totalAdultPassengers.toString(),
//           returnJourney: "true"
//         };
//         router.push(`/cabs?${createQueryParams(params)}`);
//       }
//       else if (selectedTab === "multicity") {
//         // Multi-city trip parameters
//         const params = {
//           fromCity: multicityData.pickUp || "",
//           toCities: multicityData.cities ? multicityData.cities.join("|") : "",
//           travelType: "Multi City",
//           travelDateStart: multicityData.fromDate ? format(multicityData.fromDate, 'yyyy-MM-dd') : "",
//           travelDateEnd: multicityData.toDate ? format(multicityData.toDate, 'yyyy-MM-dd') : "",
//           travelTime: multicityData.time || "",
//           passengers: totalAdultPassengers.toString(),
//           multiCity: "true"
//         };
//         router.push(`/cabs?${createQueryParams(params)}`);
//       }
//     }
//     else if (mainTab === "local") {
//       // Local city parameters
//       const params = {
//         fromCity: localCityPickUp || "",
//         toCity: localCityPickUp || "", // Same city for local
//         distance: "50", // Standard for local package
//         travelType: "Local",
//         travelDate: localCityDate ? format(localCityDate, 'yyyy-MM-dd') : "",
//         travelTime: localCityTime || "",
//         passengers: totalAdultPassengers.toString(),
//         package: localCityPackage || "",
//         hours: localCityPackage?.includes("8") ? "8" : localCityPackage?.includes("4") ? "4" : "12" // Extract hours from package
//       };
//       router.push(`/cabs?${createQueryParams(params)}`);
//     }
//     else if (mainTab === "transfer") {
//       // Airport transfer parameters
//       const params = {
//         fromCity: transferPickUp || "",
//         toCity: transferDropLocation || "",
//         distance: "30", // Standard for airport transfers
//         travelType: "Airport Transfer",
//         travelDate: transferDate ? format(transferDate, 'yyyy-MM-dd') : "",
//         travelTime: transferTime || "",
//         passengers: totalAdultPassengers.toString(),
//         isAirport: "true"
//       };
//       router.push(`/cabs?${createQueryParams(params)}`);
//     }
//   };

//   return (
//     <section id="booking" className="w-full relative overflow-hidden pt-24 pb-32">
//       <div
//         className={cn(
//           "absolute inset-0 -z-5",
//           "[background-size:30px_30px]",
//           "[background-image:linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)]",
//           "dark:[background-image:linear-gradient(to_right,rgba(96,165,250,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.05)_1px,transparent_1px)]",
//         )}
//       />

//       {/* Radial gradient for focus */}
//       <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_70%)] bg-white/50 dark:bg-black/20"></div>

//       {/* Animated cars */}
//       <div className="container relative z-10 mx-auto px-4">
//         <motion.div
//           initial={{ x: "-20%", y: "10%" }}
//           animate={{ x: "120%", y: "15%" }}
//           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//           className="absolute -z-1 top-32 left-0"
//         >
//           <FaCarSide size={20} className="text-primary/40" />
//         </motion.div>

//         <motion.div
//           initial={{ x: "120%", y: "60%" }}
//           animate={{ x: "-20%", y: "65%" }}
//           transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
//           className="absolute -z-1 bottom-64 right-0"
//         >
//           <FaCarSide size={16} className="text-primary/30" />
//         </motion.div>

//         <div className="max-w-7xl mx-auto">
//           {/* Header with badge */}
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
//               <Star size={16} className="mr-2" />
//               <span className="text-sm font-medium">Premium Cab Service</span>
//             </div>
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
//               Find Your Perfect Ride
//             </h1>
//             <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//               Experience comfort and luxury with our premium cab service tailored to your travel needs
//             </p>
//           </div>

//           <div className="flex flex-col lg:flex-row items-center gap-8 relative">
//             {/* Booking form side */}
//             <div className="w-full lg:w-1/2 z-20">
//               <div className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-6 border border-gray-100 dark:border-gray-700 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-80 relative overflow-hidden">
//                 {/* Decorative elements */}
//                 <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
//                 <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>

//                 <form onSubmit={handleSubmit} className="space-y-6 relative">
//                   {/* Main Tab Selection */}
//                   <div className="flex">
//                     <RadioGroup
//                       defaultValue="outofstation"
//                       className="flex flex-wrap gap-3 w-full"
//                       onValueChange={(value) => {
//                         setMainTab(value as MainTab);
//                         if (value === "outofstation") {
//                           setSelectedTab("oneway");
//                         }
//                       }}
//                     >
//                       <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
//                         <label className={`group relative flex cursor-pointer items-center justify-center py-3 px-4 rounded-xl transition-all duration-200 ${mainTab === "outofstation" ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"}`}>
//                           <RadioGroupItem value="outofstation" className="sr-only" />
//                           <FaRoute className="mr-2 w-4 h-4" />
//                           <span className="text-sm font-medium">Outstation</span>
//                         </label>

//                         <label className={`group relative flex cursor-pointer items-center justify-center py-3 px-4 rounded-xl transition-all duration-200 ${mainTab === "local" ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"}`}>
//                           <RadioGroupItem value="local" className="sr-only" />
//                           <MapPin className="mr-2 w-4 h-4" />
//                           <span className="text-sm font-medium">Local City</span>
//                         </label>

//                         <label className={`group relative flex cursor-pointer items-center justify-center py-3 px-4 rounded-xl transition-all duration-200 ${mainTab === "transfer" ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"}`}>
//                           <RadioGroupItem value="transfer" className="sr-only" />
//                           <FaLocationArrow className="mr-2 w-4 h-4" />
//                           <span className="text-sm font-medium">Airport</span>
//                         </label>

//                         <label className={`group relative flex cursor-pointer items-center justify-center py-3 px-4 rounded-xl transition-all duration-200 ${mainTab === "selfdrive" ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"}`}>
//                           <RadioGroupItem value="selfdrive" className="sr-only" />
//                           <Car className="mr-2 w-4 h-4" />
//                           <span className="text-sm font-medium">Self Drive</span>
//                         </label>
//                       </div>
//                     </RadioGroup>
//                   </div>

//                   {/* Outstation Sub Tabs */}
//                   {mainTab === "outofstation" && (
//                     <RadioGroup
//                       defaultValue="oneway"
//                       className="grid grid-cols-3 w-full border rounded-xl p-1 mb-4 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
//                       onValueChange={(value) => {
//                         setSelectedTab(value as "oneway" | "roundtrip" | "multicity");
//                       }}
//                     >
//                       <label className={`flex cursor-pointer py-2 px-3 text-center rounded-lg transition-all duration-200 ${selectedTab === "oneway" ? "bg-primary text-white shadow-md" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}>
//                         <RadioGroupItem value="oneway" className="sr-only" />
//                         <span className="text-sm font-medium">One Way</span>
//                       </label>
//                       <label className={`flex cursor-pointer py-2 px-3 text-center rounded-lg transition-all duration-200 ${selectedTab === "roundtrip" ? "bg-primary text-white shadow-md" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}>
//                         <RadioGroupItem value="roundtrip" className="sr-only" />
//                         <span className="text-sm font-medium">Round Trip</span>
//                       </label>
//                       <label className={`flex cursor-pointer py-2 px-3 text-center rounded-lg transition-all duration-200 ${selectedTab === "multicity" ? "bg-primary text-white shadow-md" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}>
//                         <RadioGroupItem value="multicity" className="sr-only" />
//                         <span className="text-sm font-medium">Multi City</span>
//                       </label>
//                     </RadioGroup>
//                   )}

//                   {/* Tab Content with smooth transition */}
//                   <motion.div
//                     className="space-y-6"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3 }}
//                     key={`${mainTab}-${selectedTab}`}
//                   >
//                     {mainTab === "outofstation" && <OutOfStation />}
//                     {mainTab === "local" && <LocalCity />}
//                     {mainTab === "transfer" && <Transfer />}
//                     {mainTab === "selfdrive" && (
//                       <div className="space-y-6">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           <div className="space-y-2">
//                             <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Pickup</Label>
//                             <div className="relative">
//                               <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//                               <Input className="pl-10 rounded-xl border-gray-200 dark:border-gray-700 focus:ring-primary" placeholder="Pickup Location" />
//                             </div>
//                           </div>

//                           <div className="space-y-2">
//                             <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Drop</Label>
//                             <div className="relative">
//                               <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//                               <Input className="pl-10 rounded-xl border-gray-200 dark:border-gray-700 focus:ring-primary" placeholder="Enter a location" />
//                             </div>
//                           </div>

//                           <div className="space-y-2">
//                             <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Pickup Date</Label>
//                             <div className="relative">
//                               <DatePickerInput
//                                 name="date"
//                                 onChange={setDate}
//                                 value={date}
//                               />
//                             </div>
//                           </div>

//                           <div className="space-y-2">
//                             <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Pickup Time</Label>
//                             <div className="relative">
//                               <TimeInput name='time' />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     )}

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div className="space-y-2">
//                         <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Mobile Number *</Label>
//                         <Input
//                           className="rounded-xl border-gray-200 dark:border-gray-700 focus:ring-primary"
//                           placeholder="Your Mobile Number"
//                         />
//                       </div>

//                       <div className="space-y-2">
//                         <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Total Adults *</Label>
//                         <Select onValueChange={(p) => setTotalAdultPassengers(Number(p) || 0)}>
//                           <SelectTrigger className="w-full rounded-xl border-gray-200 dark:border-gray-700 focus:ring-primary">
//                             <SelectValue placeholder="Select adults" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectGroup>
//                               <SelectLabel>Number of Adults</SelectLabel>
//                               {[1, 2, 3, 4, 5, 6].map(num => (
//                                 <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
//                               ))}
//                             </SelectGroup>
//                           </SelectContent>
//                         </Select>
//                       </div>

//                       <div className="space-y-2 md:col-span-2">
//                         <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Children (Optional)</Label>
//                         <Select onValueChange={(p) => setTotalChildPassengers(Number(p) || 0)}>
//                           <SelectTrigger className="w-full rounded-xl border-gray-200 dark:border-gray-700 focus:ring-primary">
//                             <SelectValue placeholder="Select children" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectGroup>
//                               <SelectLabel>Number of Children</SelectLabel>
//                               {[0, 1, 2, 3, 4].map(num => (
//                                 <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
//                               ))}
//                             </SelectGroup>
//                           </SelectContent>
//                         </Select>
//                       </div>
//                     </div>

//                     <Button
//                       type="submit"
//                       className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-xl font-medium text-lg shadow-lg shadow-primary/30 transition-all duration-200 hover:shadow-xl hover:shadow-primary/40 group"
//                     >
//                       Find Your Ride
//                       <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                     </Button>
//                   </motion.div>
//                 </form>
//               </div>

//               {/* Features badges */}
//               <div className="flex flex-wrap justify-center gap-3 mt-6">
//                 <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm flex items-center">
//                   <Clock size={16} className="mr-2 text-primary" />
//                   24/7 Service
//                 </div>
//                 <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm flex items-center">
//                   <Star size={16} className="mr-2 text-yellow-500" />
//                   Top Rated Drivers
//                 </div>
//                 <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm flex items-center">
//                   <Car size={16} className="mr-2 text-primary" />
//                   Luxury Fleet
//                 </div>
//               </div>
//             </div>

//             {/* Car image side */}
//             <div className="w-full lg:w-1/2 relative h-72 md:h-auto z-10">
//               <motion.div
//                 className="absolute inset-0 flex items-center justify-center"
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 key={`${mainTab}-${selectedTab}-image`}
//               >
//                 {/* Decorative circle */}
//                 <div className="absolute w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-primary/10 dark:bg-primary/5 filter blur-xl"></div>

//                 {/* Car image with jump animation on tab change */}
//                 <motion.img
//                   className="w-full h-auto object-contain drop-shadow-2xl relative z-10 max-w-lg"
//                   src="/xl6.png"
//                   alt="Luxury Maruti XL6 cab service vehicle"
//                   animate={isAnimating ? { y: [0, -20, 0] } : {}}
//                   transition={{ duration: 0.5 }}
//                 />

//                 {/* Shine effect */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
//                   initial={{ x: -500, opacity: 0 }}
//                   animate={{ x: 500, opacity: 0.5 }}
//                   transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
//                 />
//               </motion.div>

//               {/* Testimonial */}
//               <motion.div
//                 className="absolute bottom-8 right-8 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg max-w-xs hidden lg:block"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.6 }}
//               >
//                 <div className="flex items-center mb-2">
//                   <div className="flex">
//                     {[1, 2, 3, 4, 5].map((_, i) => (
//                       <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
//                     ))}
//                   </div>
//                   <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">5.0 (2,384 rides)</span>
//                 </div>
//                 <p className="text-gray-600 dark:text-gray-400 text-sm">
//                   "The most comfortable ride with excellent service. Highly recommended for both city and outstation travel."
//                 </p>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookCab;