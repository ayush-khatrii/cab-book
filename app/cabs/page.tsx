"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Navigation, Route, Calendar, ArrowUp, Clock, User, PhoneCall, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cabs, priceMatrix } from "@/constants";
import { IoLocationOutline, IoPersonOutline } from "react-icons/io5";
import { FaChild } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { getFlatPrice } from "@/utils/getFlatPrice";
import { Cab } from "@/types";
import { GoPerson } from "react-icons/go";

const Cabs = () => {
  const searchParams = useSearchParams();
  const [tripDetails, setTripDetails] = useState({
    fromCity: "N/A",
    toCity: "N/A",
    travelType: "One-way",
    travelDate: "N/A",
    travelTime: "00:00",
    adultPassengers: "0",
    childPassengers: "0",
    mobile: "N/A",
    email: "N/A",
    name: "N/A",
  });

  useEffect(() => {
    // Read URL parameters and update state
    if (searchParams) {
      const fromCity = searchParams.get('fromCity');
      const toCity = searchParams.get('toCity');
      const travelType = searchParams.get('travelType');
      const travelDate = searchParams.get('travelDate');
      const travelTime = searchParams.get('travelTime');
      const adultPassengers = searchParams.get('adultPassengers');
      const childPassengers = searchParams.get('childPassengers');
      const mobile = searchParams.get('mobile');
      const email = searchParams.get('email');
      const name = searchParams.get('name');

      // Update state with URL parameters if they exist
      setTripDetails({
        fromCity: fromCity || tripDetails.fromCity,
        toCity: toCity || tripDetails.toCity,
        travelType: travelType || tripDetails.travelType,
        // Format the date from yyyy-MM-dd to Month Day, Year
        travelDate: travelDate ? new Date(travelDate).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        }) : tripDetails.travelDate,
        travelTime: travelTime || tripDetails.travelTime,
        adultPassengers: adultPassengers || tripDetails.adultPassengers,
        childPassengers: childPassengers || tripDetails.childPassengers,
        mobile: mobile || tripDetails.mobile,
        email: email || tripDetails.email,
        name: name || tripDetails.name
      });
    }
  }, [searchParams]);

  // Function to handle booking and redirect to WhatsApp
  const handleBookNow = (cab: any) => {
    const message =
      `🚖 *New Cab Booking Request*\n\n` +
      `👤 *Customer Details:*\n` +
      `• Name: ${tripDetails.name}\n` +
      `• Email: ${tripDetails.email}\n` +
      `• Mobile: ${tripDetails.mobile}\n\n` +
      `🧳 *Trip Details:*\n` +
      `• From: ${tripDetails.fromCity}\n` +
      `• To: ${tripDetails.toCity}\n` +
      `• Travel Type: ${tripDetails.travelType}\n` +
      `• Date: ${tripDetails.travelDate}\n` +
      `• Time: ${tripDetails.travelTime}\n` +
      `• Adults: ${tripDetails.adultPassengers}\n` +
      `• Children: ${tripDetails.childPassengers}\n\n` +
      `🚗 *Selected Cab:*\n` +
      `• ${cab.name}\n\n` +
      `Please confirm the booking at your earliest convenience. Thank you!`;

    window.open(`https://wa.me/+917984986324?text=${encodeURIComponent(message)}`);
  };


  const handlePrice = (cab: Cab) => {
    return getFlatPrice(
      tripDetails.fromCity,
      tripDetails.toCity,
      cab.type,
      tripDetails.travelType
    );
  };
  return (
    <section className="min-h-screen bg-background">
      {/* Header Banner */}
      <div className="relative w-full">
        <div className="w-full relative h-64 bg-foreground">
          <div className="flex flex-col items-center text-center pt-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent">
              Our Cabs, Your Journey
            </h1>
            <p className="text-primary text-sm md:text-base mt-2 mx-w-xl ">
              Choose from our premium vehicles for a comfortable travel experience
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          <div className="lg:col-span-1">
            <div className="sticky top-18">
              <Card className="shadow-md border border-accent-foreground/20 bg-card ">
                <CardHeader className="bg-accent/10 mt-5 border-b border-border">
                  <CardTitle className="text-xl">Trip Details</CardTitle>
                  <CardDescription>Your journey information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p className="font-medium">{tripDetails.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <PhoneCall className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Phone Number</p>
                      <p className="font-medium">{tripDetails.mobile}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{tripDetails.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Navigation className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">From City</p>
                      <p className="font-medium">{tripDetails.fromCity}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <IoLocationOutline className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">To City</p>
                      <p className="font-medium">{tripDetails.toCity}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <ArrowUp className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Travel Type</p>
                      <p className="font-medium">{tripDetails.travelType}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Travel Date</p>
                      <p className="font-medium">{tripDetails.travelDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Travel Time</p>
                      <p className="font-medium">{tripDetails.travelTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <GoPerson className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Adult Passengers</p>
                      <p className="font-medium">{tripDetails.adultPassengers}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <FaChild className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Child Passengers</p>
                      <p className="font-medium">{tripDetails.childPassengers}</p>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/#booking">
                      Modify Trip
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-2 pr-2">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-primary">Available Cabs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cabs.map((cab, idx) => (
                <motion.div
                  key={cab.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.2 }}
                >
                  <Card key={cab.id} className="cursor-pointer transition-all duration-300 overflow-hidden">
                    <div className="relative w-full h-80 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent dark:from-black/100 dark:via-black/80 dark:to-transparent"></div>
                      <img
                        src={cab.background}
                        alt="background"
                        className="absolute inset-0 z-0 w-full h-full object-cover opacity-75"
                      />
                      <motion.img
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        src={cab.image}
                        alt={cab.name}
                        className="relative z-50 w-full h-64 md:h-72 top-10 object-cover"
                      />
                      <div className="absolute inset-0 top-28 bg-accent -skew-[-40deg] w-[50rem] h-[50rem]" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl">
                        <motion.h1
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {cab.name}
                        </motion.h1>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2 ">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="flex items-end justify-between gap-2 text-xl">
                        <div className="font-bold text-primary">
                          {handlePrice(cab)}
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="flex items-center justify-between gap-2 text-lg font-normal">
                        Seats:
                        <div>
                          {cab.seats}
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        className="flex items-center justify-between gap-2 text-lg font-normal">
                        Passengers:
                        <div>
                          {cab.passengers}
                        </div>
                      </motion.div>
                    </CardContent>
                    <CardFooter>
                      <motion.div
                        className="w-full"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <Button
                          variant="default"
                          className="mt-2 w-full text-base hover:bg-accent-foreground hover:text-accent transition-all duration-300 ease-in"
                          onClick={() => handleBookNow(cab)}
                        >
                          Book Now
                        </Button>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cabs;