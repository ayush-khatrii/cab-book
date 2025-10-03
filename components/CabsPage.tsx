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
import { ArrowRight, Navigation, Route, Calendar, ArrowUp, Clock, User, PhoneCall, Mail, Check, Shield, InfoIcon, Sparkles, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cabs, } from "@/constants";
import { IoLocationOutline, IoPersonOutline } from "react-icons/io5";
import { FaChild } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import Link from "next/link";
import { getFlatPrice } from "@/utils/getFlatPrice";
import { Cab } from "@/types";
import { GoPerson } from "react-icons/go";

export default function CabsPage() {
  const searchParams = useSearchParams();
  const [tripDetails, setTripDetails] = useState({
    fromCity: "NOT SELECTED",
    toCity: "NOT SELECTED",
    travelType: "NOT SELECTED",
    travelDate: "NOT SELECTED",
    tarvelPackage: "NOT SELECTED",
    travelTime: "00:00",
    adultPassengers: "0",
    childPassengers: "0",
    mobile: "NOT SELECTED",
    email: "NOT SELECTED",
    name: "NOT SELECTED",
  });

  const filteredCabs = tripDetails.travelType === "Self Drive"
    ? cabs.filter((cab) =>
      cab.name === "XL6" || cab.name === "Swift"
    )
    : cabs;

  useEffect(() => {
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
      const tarvelPackage = searchParams.get('tarvelPackage');
      setTripDetails({
        fromCity: fromCity || tripDetails.fromCity,
        toCity: toCity || tripDetails.toCity,
        travelType: travelType || tripDetails.travelType,
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
        name: name || tripDetails.name,
        tarvelPackage: tarvelPackage || tripDetails.tarvelPackage,
      });
    }
  }, [searchParams]);

  // Function to handle booking and redirect to WhatsApp
  const handleBookNow = (cab: any) => {
    const price = handlePrice(cab);

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
      `*Total Price*: ${price}\n\n` +
      `Please confirm the booking at your earliest convenience. Thank you!`;

    window.open(`https://wa.me/+917984986324?text=${encodeURIComponent(message)}`);
  };

  const handlePrice = (cab: Cab) => {
    const price = getFlatPrice(
      tripDetails.fromCity,
      tripDetails.toCity,
      cab.type,
      tripDetails.travelType
    );
    console.log(price);
    return price;
  };

  console.log(tripDetails)
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90">
      <div className="relative w-full overflow-hidden">
        <div className="w-full relative h-80">
          <div className="absolute inset-0">
            <img src="/road.jpg" alt="Road background" className="object-cover object-bottom brightness-50 grayscale-100 w-full h-full" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>
          </div>
          <div className="container relative z-10 mx-auto flex flex-col items-center text-center justify-center h-full px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary"
            >
              Premium Cab Selection
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-accent/90 text-sm w-2xs sm:w-full sm:text-base  md:text-lg mt-4 max-w-2xl"
            >
              Choose from our luxury fleet for a comfortable and reliable journey experience
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center mt-6 gap-4"
            >
              <Badge variant="outline" className="text-xs sm:text-base bg-primary/10 border-accent/50 backdrop-blur text-primary px-2 py-1 rounded-lg flex items-center gap-2">
                <Check size={16} /> 24/7 Support
              </Badge>
              <Badge variant="outline" className="text-xs sm:text-base bg-primary/10 border-accent/50 backdrop-blur text-primary px-2 py-1 rounded-lg flex items-center gap-2">
                <Check size={16} /> On-Time Pickup
              </Badge>
              <Badge variant="outline" className="text-xs sm:text-base bg-primary/10 border-accent/50 backdrop-blur text-primary px-2 py-1 rounded-lg flex items-center gap-2">
                <Check size={16} /> Clean & AC Cabs
              </Badge>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ArrowRight className="h-3 w-3 mx-2" />
          <Link href="/#booking" className="hover:text-primary transition-colors">Booking</Link>
          <ArrowRight className="h-3 w-3 mx-2" />
          <span className="text-primary font-medium">Select Cab</span>
        </div>
      </div>

      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 lg:order-1">
            <div className="sticky top-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="shadow-lg border-0 bg-card/95 backdrop-blur-sm overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary/50"></div>
                  <div className="pl-8 py-4 border-b">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl font-bold">Your Trip Details</CardTitle>
                        <CardDescription>Review your journey information</CardDescription>
                      </div>
                    </div>
                  </div>
                  <CardContent className="space-y-6 pt-6">
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                      <h3 className="font-medium text-primary mb-2 flex items-center gap-2">
                        <Route className="h-4 w-4" /> Route Information
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1.5 rounded-md mt-0.5">
                            <Navigation className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">From</p>
                            <p className="font-medium">{tripDetails.fromCity}</p>
                          </div>
                        </div>
                        {
                          tripDetails.travelType === "Self Drive" ?
                            null :
                            <div className="flex items-start gap-3">
                              <div className="bg-primary/10 p-1.5 rounded-md mt-0.5">
                                <IoLocationOutline className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground">To</p>
                                <p className="font-medium">{tripDetails.toCity}</p>
                              </div>
                            </div>
                        }
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1.5 rounded-md mt-0.5">
                            <Calendar className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Travel Date</p>
                            <p className="font-medium">{tripDetails.travelDate}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1.5 rounded-md mt-0.5">
                            <Clock className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Travel Time</p>
                            <p className="font-medium">{tripDetails.travelTime}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                      <h3 className="font-medium text-primary mb-2 flex items-center gap-2">
                        <User className="h-4 w-4" /> Passenger Details
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1.5 rounded-md mt-0.5">
                            <User className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Name</p>
                            <p className="font-medium">{tripDetails.name}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1.5 rounded-md mt-0.5">
                            <PhoneCall className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Phone</p>
                            <p className="font-medium">{tripDetails.mobile}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1.5 rounded-md mt-0.5">
                            <Mail className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground ">Email</p>
                            <p className="font-medium">{tripDetails.email}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1.5 rounded-md mt-0.5">
                            <ArrowUp className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Travel Type</p>
                            <p className="font-medium">{tripDetails.travelType}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                      <h3 className="font-medium text-primary mb-2 flex items-center gap-2">
                        <GrGroup className="h-4 w-4" /> Group Size
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1.5 rounded-md mt-0.5">
                            <GoPerson className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Adults</p>
                            <p className="font-medium">{tripDetails.adultPassengers}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1.5 rounded-md mt-0.5">
                            <FaChild className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Children</p>
                            <p className="font-medium">{tripDetails.childPassengers}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button asChild variant="outline" className="w-full bg-primary/5 border-primary/20 hover:bg-primary/10">
                        <Link href="/#booking">
                          Modify Trip Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Select Your Perfect Ride</h2>
              <p className="text-muted-foreground">Choose from our premium fleet for your journey from {tripDetails.fromCity} to {tripDetails.toCity}</p>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {filteredCabs.map((cab, idx) => {
                const isSelfDrive = cab.selfDrive;
                return (
                  <motion.div
                    key={cab.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="group relative"
                  >

                    <div className={`overflow-hidden bg-card border rounded-md shadow-md transition-all duration-300 hover:shadow-xl relative ${isSelfDrive
                      ? 'ring-4 ring-primary/50 shadow-2xl shadow-primary/20 hover:ring-primary/70 hover:shadow-primary/30'
                      : ''
                      }`}>
                      {isSelfDrive && (
                        <>
                          <div className="absolute top-0 left-0 w-24 h-24 bg-primary/10 rounded-br-full animate-pulse"></div>
                          <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/10 rounded-tl-full animate-pulse"></div>
                        </>
                      )}

                      <div className="absolute top-2 left-2 z-20">
                        {isSelfDrive ? (
                          <Badge className="bg-primary text-primary-foreground font-bold px-4 py-2 shadow-lg flex items-center gap-1.5">
                            <Star className="w-4 h-4 fill-current" />
                            Self Drive Available
                          </Badge>
                        ) : (
                          <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-1">
                            Top Rated
                          </Badge>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 items-center">
                        <div className="md:col-span-5 relative overflow-hidden h-60 md:h-full">
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-white/50 to-transparent z-10"></div>
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-white/50 to-transparent z-10"></div>
                          <img
                            src={cab.background}
                            alt="background"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                          />
                          <img
                            src={cab.image}
                            alt={cab.name}
                            className="relative z-10 w-full h-60 md:h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <div className="md:col-span-7 p-6 relative z-10">
                          <div className="flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                              <div className="flex items-center gap-2">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{cab.name}</h3>
                                {isSelfDrive && (
                                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 font-bold text-xs px-2 py-0.5">
                                    HOT 🔥
                                  </Badge>
                                )}
                              </div>
                              <div className="text-2xl font-bold text-primary">{handlePrice(cab)}</div>
                            </div>
                            {isSelfDrive && cab.selfDrivePrice && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="mb-4 relative"
                              >
                                <div className="absolute inset-0 bg-primary/20 rounded-lg blur-sm"></div>
                                <div className="relative bg-primary/5 border-2 border-primary/30 p-4 rounded-lg">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wide flex items-center gap-1">
                                      <Sparkles className="w-3 h-3" />
                                      Limited Time Offer
                                    </span>
                                    <Badge className="bg-destructive text-destructive-foreground font-bold text-xs px-2 py-0.5 animate-pulse">
                                      SAVE 20%
                                    </Badge>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="font-bold text-foreground flex items-center gap-2">
                                      🚗 Self Drive Price:
                                    </span>
                                    <div className="flex flex-col items-end">
                                      <div className="text-2xl font-black text-primary">
                                        ₹{cab.selfDrivePrice}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6">
                              <div className="flex items-center gap-2">
                                <div className="bg-primary/10 p-1.5 rounded-md">
                                  <GoPerson className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">Passengers</p>
                                  <p className="font-medium">{cab.passengers}</p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                <div className="bg-primary/10 p-1.5 rounded-md">
                                  <IoPersonOutline className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">Seats</p>
                                  <p className="font-medium">{cab.seats}</p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                <div className="bg-primary/10 p-1.5 rounded-md">
                                  <Route className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">{isSelfDrive ? 'With Driver' : 'Price per km'}</p>
                                  <p className={`font-medium ${isSelfDrive ? 'opacity-70' : ''}`}>{cab.pricePerKm}/km</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="bg-primary/10 p-1.5 rounded-md">
                                  <ArrowUp className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">Type</p>
                                  <p className="font-medium capitalize">{cab.type}</p>
                                </div>
                              </div>
                            </div>

                            <div className="mt-auto space-y-4">
                              <div className="p-3 rounded-md">
                                <p className="text-sm font-medium border border-primary p-3 rounded-md text-primary/70 flex items-center gap-2">
                                  <InfoIcon size={25} />
                                  <span>Non-refundable booking with advance payment required. All fares are subject to our terms and conditions.</span>
                                </p>
                              </div>

                              <Button
                                variant="default"
                                className={`w-full py-6 text-base transition-all duration-300 font-bold ${isSelfDrive
                                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02]'
                                  : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                                  }`}
                                onClick={() => handleBookNow(cab)}
                              >
                                {isSelfDrive ? '🔥 Book Self Drive Now' : 'Book Now and Pay'}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};