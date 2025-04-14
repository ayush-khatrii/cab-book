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
import { ArrowRight, Navigation, Route, Calendar, ArrowUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cabs } from "@/constants";
import { IoLocationOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import Link from "next/link";

const Cabs = () => {
  const searchParams = useSearchParams();
  const [tripDetails, setTripDetails] = useState({
    fromCity: "Ahmedabad",
    toCity: "Gandhinagar",
    distance: "500",
    travelType: "One-way",
    travelDate: "May 15, 2023",
    travelTime: "5:00 PM",
    passengers: "5"
  });

  useEffect(() => {
    // Read URL parameters and update state
    if (searchParams) {
      const fromCity = searchParams.get('fromCity');
      const toCity = searchParams.get('toCities');
      const distance = searchParams.get('distance');
      const travelType = searchParams.get('travelType');
      const travelDate = searchParams.get('travelDate');
      const travelTime = searchParams.get('travelTime');
      const passengers = searchParams.get('passengers');

      // Update state with URL parameters if they exist
      setTripDetails({
        fromCity: fromCity || tripDetails.fromCity,
        toCity: toCity || tripDetails.toCity,
        distance: distance || tripDetails.distance,
        travelType: travelType || tripDetails.travelType,
        // Format the date from yyyy-MM-dd to Month Day, Year
        travelDate: travelDate ? new Date(travelDate).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        }) : tripDetails.travelDate,
        travelTime: travelTime || tripDetails.travelTime,
        passengers: passengers || tripDetails.passengers
      });
    }
  }, [searchParams]);

  // Function to handle booking and redirect to WhatsApp
  const handleBookNow = (cab: any) => {
    const message = `🚖 *Booking Request*
- *From:* ${tripDetails.fromCity}
- *To:* ${tripDetails.toCity}
- *Travel Type:* ${tripDetails.travelType}
- *Date:* ${tripDetails.travelDate}
- *Time:* ${tripDetails.travelTime}
- *Passengers:* ${tripDetails.passengers}
- *Selected Cab:* ${cab.name}
- *Price:* ₹${cab.pricePerKm}/km `;

    window.open(`https://wa.me/+918200450219?text=${encodeURIComponent(message)}`);
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
            <div className="sticky top-20">
              <Card className="shadow-md border border-accent-foreground/20 bg-card ">
                <CardHeader className="bg-accent/10 mt-5 border-b border-border">
                  <CardTitle className="text-xl">Trip Details</CardTitle>
                  <CardDescription>Your journey information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
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
                      <Route className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Distance</p>
                      <p className="font-medium">{tripDetails.distance} kms</p>
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
                      <FaPeopleGroup className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Total Passengers</p>
                      <p className="font-medium">{tripDetails.passengers}</p>
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
                      <Badge
                        variant={"default"}
                        className="absolute font-medium text-base top-20 border right-5 md:top-24 md:right-12 p-2 z-20">
                        ₹{cab.pricePerKm}/km
                      </Badge>
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
                    <CardContent className="flex flex-col opacity-70 gap-2 ">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="flex items-center justify-between gap-2 text-lg font-normal">
                        {cab.name}
                        <div>
                          ₹{cab.pricePerKm}/km
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
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className="flex items-center justify-between gap-2 text-lg font-normal">
                        Bags:
                        <div>
                          {cab.bags}
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