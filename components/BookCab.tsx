
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

const BookCab = () => {
  const [date, setDate] = useState<Value>(new Date());
  const { setSelectedTab, selectedTab, mainTab, setMainTab, onewayData, roundtripData, multicityData } = useOutOfStationStore();
  const { date: localCityDate, package: localCityPackage, pickUp: localCityPickUp, time: localCityTime } = useLocalCityStore();
  const { date: transferDate, pickUp: transferPickUp, dropLocation: transferDropLocation, time: transferTime } = useTransferStore();
  const router = useRouter();
  const [totalAdultPassengers, setTotalAdultPassengers] = useState(0);

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
          passengers: totalAdultPassengers.toString(),
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
          passengers: totalAdultPassengers.toString(),
          returnJourney: "true"
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
          passengers: totalAdultPassengers.toString(),
          multiCity: "true"
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
        passengers: totalAdultPassengers.toString(),
        package: localCityPackage || "",
        hours: localCityPackage?.includes("8") ? "8" : localCityPackage?.includes("4") ? "4" : "12" // Extract hours from package
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
        passengers: totalAdultPassengers.toString(),
        isAirport: "true"
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
      <div className="pointer-events-none -z-50 absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] dark:bg-white"></div>

      <motion.div
        initial={{ x: "-10%" }}
        animate={{ x: "110%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="relative -z-10"
      >
        <FaCarSide size={30} className="text-primary" />
      </motion.div>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
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
                      className="flex flex-wrap gap-2 w-full"
                      onValueChange={(value) => {
                        setMainTab(value as MainTab);
                        if (value === "outofstation") {
                          setSelectedTab("oneway");
                        }
                      }}
                    >
                      <div className="flex flex-wrap gap-2 w-full">
                        <label className={`relative flex-1 min-w-32 cursor-pointer items-center justify-center p-3 rounded-md ${mainTab === "outofstation" ? "bg-primary text-white" : "bg-gray-100 text-gray-700"}`}>
                          <RadioGroupItem value="outofstation" className="sr-only" />
                          <span className="text-sm font-medium">Outstation</span>
                        </label>

                        <label className={`relative flex-1 min-w-32 cursor-pointer items-center justify-center p-3 rounded-md ${mainTab === "local" ? "bg-primary text-white" : "bg-gray-100 text-gray-700"}`}>
                          <RadioGroupItem value="local" className="sr-only" />
                          <span className="text-sm font-medium">Local City</span>
                        </label>

                        <label className={`relative flex-1 min-w-32 cursor-pointer items-center justify-center p-3 rounded-md ${mainTab === "transfer" ? "bg-primary text-white" : "bg-gray-100 text-gray-700"}`}>
                          <RadioGroupItem value="transfer" className="sr-only" />
                          <span className="text-sm font-medium">Airport Transfer</span>
                        </label>

                        <label className={`relative flex-1 min-w-32 cursor-pointer items-center justify-center p-3 rounded-md ${mainTab === "selfdrive" ? "bg-primary text-white" : "bg-gray-100 text-gray-700"}`}>
                          <RadioGroupItem value="selfdrive" className="sr-only" />
                          <span className="text-sm font-medium">Self Drive</span>
                        </label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Outstation Sub Tabs */}
                  {mainTab === "outofstation" && (
                    <RadioGroup
                      defaultValue="oneway"
                      className="grid grid-cols-2 w-full border rounded-lg p-1 mb-4"
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
                      <label className={`col-span-2 md:col-span-full cursor-pointer py-2 px-4 text-center border  rounded-md transition ${selectedTab === "multicity" ? "bg-accent-foreground/90 text-white" : "text-accent-foreground"}`}>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">Pickup</Label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input className="pl-10 rounded-lg border-gray-200" placeholder="Pickup Location" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">Drop</Label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input className="pl-10 rounded-lg border-gray-200" placeholder="Enter a location" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">Pickup Date</Label>
                            <div className="relative">
                              <DatePickerInput
                                name="date"
                                onChange={setDate}
                                value={date}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">Pickup Time</Label>
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
                      <Label className="text-sm font-medium text-gray-700">Mobile Number *</Label>
                      <Input
                        className="rounded-lg border-gray-200"
                        placeholder="Your Mobile Number"
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
                      <Select>
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
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="relative">
                <div className="bg-transparent p-1 rounded-lg relative z-10">
                  <img
                    src="/xl6.png"
                    alt="Happy driver in a car"
                    className="rounded-lg w-full max-h-full h-full object-cover"
                  />
                </div>
                <div className="absolute right-64 -top-96 w-[200px] h-[3000px] bg-primary transform rotate-12 origin-bottom-right"></div>
                <div className="absolute -z-10 -top-96 w-[200px] h-[3000px] bg-accent-foreground/90 transform rotate-12 origin-bottom-right"></div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </section >
  );
};

export default BookCab;