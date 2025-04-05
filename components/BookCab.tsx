"use client";
import React, { useState } from 'react'
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MdWork } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import { Label } from "./ui/label";
import { ArrowRight, MapPin } from "lucide-react";
import { Input } from "./ui/input";
import TimeInput from './ui/time-input';
import { RiTaxiFill } from "react-icons/ri";
import DatePickerInput, { Value } from './ui/DatePicker';
import { FaLocationDot } from 'react-icons/fa6';
import OutOfStation from './BookingTabs/OutOfStation';
import { useOutOfStationStore } from '@/store/outofstation';
import { format } from "date-fns"
import { MainTab } from '@/types';
import LocalCity from './BookingTabs/LocalCity';
import { useLocalCityStore } from '@/store/localcity';

const BookCab = () => {
  const [date, setDate] = useState<Value>(new Date());
  const { setSelectedTab, selectedTab, mainTab, setMainTab, onewayData, roundtripData, multicityData } = useOutOfStationStore();
  const { date: localCityDate, package: localCityPackage, pickUp: localCityPickUp, time: localCityTime } = useLocalCityStore();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("🚖 Selected Main Tab:", mainTab);
    console.log("🛣️ Selected Sub Tab:", selectedTab);

    if (mainTab === "outofstation") {
      if (selectedTab === "oneway") {
        handleSendData(`🚖 *One-Way Trip*  
          - *Pick-up City:* ${onewayData.pickUp}  
          - *Drop-off City:* ${onewayData.dropOff}  
          - *Date:* ${format(onewayData.date, 'dd/MM/yyyy')}  
          - *Time:* ${onewayData.time}`);

      } else if (selectedTab === "roundtrip") {
        handleSendData(`🚖 *Round Trip*  
          - *Pick-up City:* ${roundtripData.pickUp}  
          - *Drop-off Cities :* ${roundtripData.dropOff}  
          - *From Date:* ${format(roundtripData.fromDate, 'dd/MM/yyyy')}  
          - *To Date:* ${format(roundtripData.toDate, 'dd/MM/yyyy')}  
          - *Time:* ${roundtripData.time}`
        );

      } else if (selectedTab === "multicity") {
        handleSendData(`🚖 *Multicity Trip*  
          - *Pick-up City:* ${multicityData.pickUp}  
          - *To Cities :* ${multicityData.cities.map((city) => city).join(", ")}  
          - *From Date:* ${format(multicityData.fromDate, 'dd/MM/yyyy')}  
          - *To Date:* ${format(multicityData.toDate, 'dd/MM/yyyy')}  
          - *Time:* ${multicityData.time} `
        );
      }
    }
    if (mainTab === "local") {
      handleSendData(`🚖 *Local City Trip*  
        - *Pick-up City:* ${localCityPickUp}  
        - *Package:* ${localCityPackage}
        - *Date:* ${format(localCityDate, 'dd/MM/yyyy')}  
        - *Time:* ${localCityTime}`);
    }
    if (mainTab === "transfer") {
      // handle transfer data 
    }
    if (mainTab === "selfdrive") {
      // handle self drive data
    }
  };


  const handleSendData = (data: any) => {
    window.open(`https://wa.me/+918200450219?text=${encodeURIComponent(data)}`);
  }

  return (
    <section id='book' className='max-w-5xl bg-background border border-accent-foreground/20 shadow-sm rounded-md mx-5 md:mx-auto my-10'>
      <div className='mb-5 p-5 flex justify-center items-center rounded-t-md flex-col bg-primary text-background'>
        <h1 className='text-2xl sm:text-3xl font-bold text-center'>Book Now</h1>
        <p className='text-center text-sm md:text-lg font-normal text-accent'>Shivay Safar Gets You There, Fast & Safe</p>
      </div>
      <div className="text-center z-[200] px-5">
        <RadioGroup
          defaultValue="outofstation"
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-auto"
          onValueChange={(value) => {
            setMainTab(value as MainTab);
            if (value === "outofstation") {
              setSelectedTab("oneway");
            }
          }}
        >
          <label className={`relative flex cursor-pointer flex-col items-center gap-2 p-4  rounded-md border transition ${mainTab === "outofstation" ? "bg-primary text-background" : "border-gray-300"}`}>
            <RadioGroupItem value="outofstation" className="sr-only" />
            <MdWork size={24} />
            <p className="text-sm font-medium">Out Of Station</p>
          </label>

          <label className={`relative flex cursor-pointer flex-col items-center gap-2 p-4 rounded-md border  ${mainTab === "local" ? "bg-primary text-background" : "border-gray-300"}`}>
            <RadioGroupItem value="local" className="sr-only" />
            <FaLocationDot size={24} />
            <p className="text-sm font-medium">Local</p>
          </label>

          <label className={`relative flex cursor-pointer flex-col items-center gap-2 p-4 rounded-md border  ${mainTab === "transfer" ? "bg-primary text-background" : "border-gray-300"}`}>
            <RadioGroupItem value="transfer" className="sr-only" />
            <BiTransferAlt size={24} />
            <p className="text-sm font-medium">Transfer</p>
          </label>
          <label className={`relative flex cursor-pointer flex-col items-center gap-2 p-4 rounded-md border ${mainTab === "selfdrive" ? "bg-primary text-background" : "border-gray-300"}`}>
            <RadioGroupItem value="selfdrive" className="sr-only" />
            <RiTaxiFill size={24} />
            <p className="text-sm font-medium">Self Drive</p>
          </label>
        </RadioGroup>
      </div>
      <form onSubmit={handleSubmit} className="mt-6 p-5">
        {mainTab === "outofstation" &&
          <>
            <RadioGroup
              defaultValue="oneway"
              className="grid grid-cols-1 md:grid-cols-3 items-center w-full gap-4 mb-10"
              onValueChange={(value) => {
                setSelectedTab(value as "oneway" | "roundtrip" | "multicity");
              }}
            >
              <label className={`relative flex cursor-pointer flex-col items-center gap-2 p-4 rounded-md border transition ${selectedTab === "oneway" ? "border-ring bg-accent" : "border-gray-300"}`}>
                <RadioGroupItem value="oneway" className="sr-only" />
                <p className="text-xs md:text-sm font-medium">One-Way</p>
              </label>
              <label className={`relative flex cursor-pointer flex-col items-center gap-2 p-4 rounded-md border transition ${selectedTab === "roundtrip" ? "border-ring bg-accent" : "border-gray-300"}`}>
                <RadioGroupItem value="roundtrip" className="sr-only" />
                <p className="text-xs md:text-sm font-medium">Roundtrip</p>
              </label>
              <label className={`relative flex cursor-pointer flex-col items-center gap-2 p-4 rounded-md border transition ${selectedTab === "multicity" ? "border-ring bg-accent" : "border-gray-300"}`}>
                <RadioGroupItem value="multicity" className="sr-only" />
                <p className="text-xs md:text-sm font-medium">Multiple Cities</p>
              </label>
            </RadioGroup>
            <p className="text-accent-foreground text-center">Plan your long-distance journey with ease.</p>
            <OutOfStation />
          </>
        }
        {mainTab === "local" &&
          <>
            <LocalCity />
          </>
        }
        {mainTab === "transfer" &&
          <>
            <p className="text-accent-foreground text-center">Get seamless transfer services.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 mt-10 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Pick-up Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-10" placeholder="Ahmedabad, Gujarat" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Drop-off Location</Label>
                <div className="relative">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-10" placeholder="Ahmedabad, Airport" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Travel Date</Label>
                <div className="relative">
                  <DatePickerInput
                    name='date'
                    onChange={setDate}
                    value={date}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Pick-up Time</Label>
                <div className="relative">
                  <TimeInput
                    name='time'
                  />
                </div>
              </div>
            </div>
          </>
        }
        {mainTab === "selfdrive" &&
          <>
            <p className="text-accent-foreground text-center">Get Self Drive services.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 mt-10 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Pick-up City</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-10" placeholder="Ahmedabad, Gujarat" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Drop-off City</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-10" placeholder="Gandhidham, Gujarat" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Travel Date</Label>
                <div className="relative">
                  <DatePickerInput
                    name="date"
                    onChange={setDate}
                    value={date}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Pick-up Time</Label>
                <div className="relative">
                  <TimeInput
                    name='time'
                  />
                </div>
              </div>
            </div>
          </>

        }
        <div className="mt-6 group">
          {/* <Button type='submit' className="w-full">Search Cabs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ease-in-out" /></Button> */}
          <Button
            variant="default" type='submit' className="w-full mt-5">
            Send on whatsapp
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ease-in-out" />
          </Button>
        </div>
      </form>
    </section>
  )
}

export default BookCab;