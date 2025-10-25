"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "./ui/label";
import { ArrowRight, MapPin, Calendar, Clock, Car, Shield } from "lucide-react";
import { Input } from "./ui/input";
import TimeInput from "./ui/time-input";
import DatePickerInput, { Value } from "./ui/DatePicker";
import OutOfStation from "./BookingTabs/OutOfStation";
import { useOutOfStationStore } from "@/store/outofstation";
import { format } from "date-fns";
import { MainTab, SELF_DRIVE } from "@/types";
import LocalCity from "./BookingTabs/LocalCity";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { FaCarSide } from "react-icons/fa";
``;
import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaLocationArrow, FaRoute } from "react-icons/fa6";
import { createQueryParams } from "@/utils/helpers";

const BookCab = () => {
  const [date, setDate] = useState<Value>(new Date());
  const {
    setSelectedTab,
    selectedTab,
    mainTab,
    setMainTab,
    onewayData,
    roundtripData,
    multicityData,
  } = useOutOfStationStore();
  const router = useRouter();
  const [totalAdultPassengers, setTotalAdultPassengers] = useState(0);
  const [totalChildPassengers, setTotalChildPassengers] = useState(0);
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selfDriveData, setSelfDriveData] = useState<SELF_DRIVE>({
    deliverAdress: "",
    driveDate: new Date(),
    driveTime: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (mainTab === "outofstation") {
      if (selectedTab === "oneway") {
        // One-way trip parameters
        const params = {
          fromCity: (onewayData.pickUp || "").trim(),
          toCity: (onewayData.dropOff || "").trim(),
          travelType: "One-way",
          travelDate: onewayData.date
            ? format(onewayData.date, "yyyy-MM-dd")
            : "",
          travelTime: onewayData.time || "",
          adultPassengers: totalAdultPassengers.toString(),
          childPassengers: totalChildPassengers.toString(),
          mobile,
          name,
          email,
        };
        router.push(`/cabs?${createQueryParams(params)}`);
      } else if (selectedTab === "roundtrip") {
        // Round trip parameters
        const params = {
          fromCity: (roundtripData.pickUp || "").trim(),
          toCity: (roundtripData.dropOff || "").trim(),
          travelType: "Round Trip",
          travelDateStart: roundtripData.fromDate
            ? format(roundtripData.fromDate, "yyyy-MM-dd")
            : "",
          travelDateEnd: roundtripData.toDate
            ? format(roundtripData.toDate, "yyyy-MM-dd")
            : "",
          travelTime: roundtripData.time || "",
          adultPassengers: totalAdultPassengers.toString(),
          childPassengers: totalChildPassengers.toString(),
          returnJourney: "true",
          mobile,
          name,
          email,
        };
        router.push(`/cabs?${createQueryParams(params)}`);
      } else if (selectedTab === "multicity") {
        // Multi-city trip parameters
        const params = {
          fromCity: multicityData.pickUp.trim() || "",
          toCities: multicityData.cities
            ? multicityData.cities.map((city) => city.trim()).join("|")
            : "",
          travelType: "Multi City",
          travelDateStart: multicityData.fromDate
            ? format(multicityData.fromDate, "yyyy-MM-dd")
            : "",
          travelDateEnd: multicityData.toDate
            ? format(multicityData.toDate, "yyyy-MM-dd")
            : "",
          travelTime: multicityData.time || "",
          adultPassengers: totalAdultPassengers.toString(),
          childPassengers: totalChildPassengers.toString(),
          multiCity: "true",
          mobile,
          name,
          email,
        };
        router.push(`/cabs?${createQueryParams(params)}`);
      }
    } else if (mainTab === "selfdrive") {
      const params = {
        fromCity: selfDriveData.deliverAdress.trim() || "",
        travelType: "Self Drive",
        travelDate: selfDriveData.driveDate
          ? format(selfDriveData.driveDate, "yyyy-MM-dd")
          : "",
        travelTime: selfDriveData.driveTime || "",
        adultPassengers: totalAdultPassengers.toString(),
        childPassengers: totalChildPassengers.toString(),
        multiCity: "false",
        mobile,
        name,
        email,
      };
      router.push(`/cabs?${createQueryParams(params)}`);
    }
  };

  return (
    <section id="booking" className="w-full relative overflow-hidden py-16">
      <div
        className={cn(
          "absolute inset-0 -z-50",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
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
          <div className="flex flex-col justify-center lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 z-10">
              <h1 className="text-4xl font-bold text-primary  mb-6">
                Start Your Travel Booking
              </h1>
              <div className=" shadow-lg rounded-2xl p-6 bg-white border border-accent-foreground/20">
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
                        <label
                          className={`group relative flex cursor-pointer items-center justify-center py-3 px-4 rounded-xl transition-all duration-200 ${mainTab === "outofstation"
                            ? "bg-primary text-white shadow-lg shadow-primary/30"
                            : "border hover:bg-accent-foreground/20"
                            }`}
                        >
                          <RadioGroupItem
                            value="outofstation"
                            className="sr-only"
                          />
                          <FaRoute className="mr-2 w-4 h-4" />
                          <span className="text-sm font-medium">
                            Outstation
                          </span>
                        </label>

                        <label
                          className={`group relative flex cursor-pointer items-center justify-center py-3 px-4 rounded-xl transition-all duration-200 ${mainTab === "local"
                            ? "bg-primary text-white shadow-lg shadow-primary/30"
                            : "border hover:bg-accent-foreground/20"
                            }`}
                        >
                          <RadioGroupItem value="local" className="sr-only" />
                          <MapPin className="mr-2 w-4 h-4" />
                          <span className="text-sm font-medium">
                            Local City
                          </span>
                        </label>

                        <label
                          className={`group relative flex cursor-pointer items-center justify-center py-3 px-4 rounded-xl transition-all duration-200 ${mainTab === "selfdrive"
                            ? "bg-primary text-white shadow-lg shadow-primary/30"
                            : "border hover:bg-accent-foreground/20"
                            }`}
                        >
                          <RadioGroupItem
                            value="selfdrive"
                            className="sr-only"
                          />
                          <Car className="mr-2 w-4 h-4" />
                          <span className="text-sm font-medium">
                            Self Drive
                          </span>
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
                        setSelectedTab(
                          value as "oneway" | "roundtrip" | "multicity"
                        );
                      }}
                    >
                      <label
                        className={`flex-1 cursor-pointer py-2 px-4 text-center rounded-md transition  border ${selectedTab === "oneway"
                          ? "bg-accent-foreground/90 text-background"
                          : ""
                          }`}
                      >
                        <RadioGroupItem value="oneway" className="sr-only" />
                        <span className="text-sm font-medium">Oneway</span>
                      </label>
                      <label
                        className={`flex-1 cursor-pointer py-2 px-4 text-center rounded-md transition  border ${selectedTab === "roundtrip"
                          ? "bg-accent-foreground/90 text-background"
                          : ""
                          }`}
                      >
                        <RadioGroupItem value="roundtrip" className="sr-only" />
                        <span className="text-sm font-medium">Roundtrip</span>
                      </label>
                      <label
                        className={` cursor-pointer py-2 px-4 text-center border  rounded-md transition ${selectedTab === "multicity"
                          ? "bg-accent-foreground/90 text-background"
                          : ""
                          }`}
                      >
                        <RadioGroupItem value="multicity" className="sr-only" />
                        <span className="text-sm font-medium">
                          Multiple Cities
                        </span>
                      </label>
                    </RadioGroup>
                  )}

                  {/* Tab Content */}
                  <div className="space-y-6">
                    {mainTab === "outofstation" && <OutOfStation />}
                    {mainTab === "local" && <LocalCity />}
                    {mainTab === "selfdrive" && (
                      <div className="space-y-6">
                        <div className="bg-accent border border-l-4 border-primary text-primary p-4 rounded-md">
                          <div className="flex flex-col gap-2 text-center">
                            <p className="font-semibold">
                              Self Drive Timing:{" "}
                              <span className="font-bold">
                                10:00 AM - 10:00 PM
                              </span>
                            </p>
                            <p className="font-semibold">
                              Available Locations:{" "}
                              <span className="font-bold">
                                Gandhidham, Anjar, Bhuj, Bhachau, Adipur (All
                                over in kutch){" "}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2 col-span-2">
                            <Label className="text-sm font-medium">
                              Delivery Address
                            </Label>
                          </div>

                          <div className="space-y-2 w-full col-span-2 ">
                            <Label className="text-sm font-medium">
                              Select City
                            </Label>
                            <div className="relative">
                              <Select
                                onValueChange={(value) =>
                                  setSelfDriveData({
                                    ...selfDriveData,
                                    deliverAdress: value,
                                  })
                                }
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select city  for self drive" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>Number of Adults</SelectLabel>
                                    <SelectItem value="Gandhidham">
                                      Gandhidham
                                    </SelectItem>
                                    <SelectItem value="Anjar">Anjar</SelectItem>
                                    <SelectItem value="Bhuj">Bhuj</SelectItem>
                                    <SelectItem value="Adipur">
                                      Adipur
                                    </SelectItem>
                                    <SelectItem value="Bhachau">
                                      Bhachau
                                    </SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="space-y-2 col-span-2">
                            <Label className="text-sm font-medium">
                              Drive Time
                            </Label>
                            <div className="relative">
                              <TimeInput
                                name="time"
                                onChange={(time) =>
                                  setSelfDriveData((prev) => ({
                                    ...prev,
                                    driveTime: time,
                                  }))
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">
                        Your Name *
                      </Label>
                      <Input
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className=""
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">
                        Mobile Number *
                      </Label>
                      <Input
                        type="number"
                        onChange={(e) => setMobile(e.target.value)}
                        className=""
                        placeholder="Your Mobile Number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className=""
                        placeholder="Your Email Address"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">
                        Total Passengers *
                      </Label>
                      <Select
                        onValueChange={(p) =>
                          setTotalAdultPassengers(Number(p) || 0)
                        }
                      >
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
                            <SelectItem value="5">5</SelectItem>
                            <SelectItem value="6">6</SelectItem>
                            <SelectItem value="7">7</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Select
                        onValueChange={(p) =>
                          setTotalChildPassengers(Number(p) || 0)
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select total children" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Number of Children</SelectLabel>
                            <SelectItem value="0">0</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
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

            <div className="lg:w-1/2 relative ">
              <div className="absolute -z-10 top-0 right-0 w-full h-full">
                <div className="absolute right-0 top-0 w-full max-w-lg h-full">
                  <div className="absolute top-0 right-5 md:right-0 w-full h-full bg-gradient-to-br from-foreground border to-foreground/60 opacity-90 rounded-3xl transform rotate-3 translate-x-6 translate-y-6"></div>
                  <div className="absolute top-0 right-5 md:right-0 w-full h-full bg-gradient-to-br from-primary border to-foreground-700 rounded-3xl transform rotate-3 translate-x-3 translate-y-3"></div>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative z-10">
                <img
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  src="/innova-img.png"
                  alt="Luxury cab service vehicle"
                />
                <div className="absolute bottom-0 left-0 h-16 bg-gradient-to-t from-slate-200/30 to-transparent blur-sm transform scale-y-50 translate-y-1/2 opacity-60"></div>
                <div className="absolute top-4 md:left-10 bg-accent/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">Verified Drivers</span>
                </div>
                <div className="absolute bottom-4 right-0 md:-right-10 bg-accent/80 border backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none -z-40 absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    </section>
  );
};

export default BookCab;
