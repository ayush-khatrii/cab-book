// "use client";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { ArrowRight, Navigation, Route, Calendar, ArrowUp, Clock, User, PhoneCall, Mail } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { cabs, priceMatrix } from "@/constants";
// import { IoLocationOutline, IoPersonOutline } from "react-icons/io5";
// import { FaChild } from "react-icons/fa6";
// import { GrGroup } from "react-icons/gr";
// import Link from "next/link";
// import { MdEmail } from "react-icons/md";
// import { getFlatPrice } from "@/utils/getFlatPrice";
// import { Cab } from "@/types";
// import { GoPerson } from "react-icons/go";

// const Cabs = () => {
//   const searchParams = useSearchParams();
//   const [tripDetails, setTripDetails] = useState({
//     fromCity: "NOT SELECTED",
//     toCity: "NOT SELECTED",
//     travelType: "NOT SELECTED",
//     travelDate: "NOT SELECTED",
//     tarvelPackage: "NOT SELECTED",
//     travelTime: "00:00",
//     adultPassengers: "0",
//     childPassengers: "0",
//     mobile: "NOT SELECTED",
//     email: "NOT SELECTED",
//     name: "NOT SELECTED",
//   });

//   useEffect(() => {
//     // Read URL parameters and update state
//     if (searchParams) {
//       const fromCity = searchParams.get('fromCity');
//       const toCity = searchParams.get('toCity');
//       const travelType = searchParams.get('travelType');
//       const travelDate = searchParams.get('travelDate');
//       const travelTime = searchParams.get('travelTime');
//       const adultPassengers = searchParams.get('adultPassengers');
//       const childPassengers = searchParams.get('childPassengers');
//       const mobile = searchParams.get('mobile');
//       const email = searchParams.get('email');
//       const name = searchParams.get('name');
//       const tarvelPackage = searchParams.get('tarvelPackage');

//       // Update state with URL parameters if they exist
//       setTripDetails({
//         fromCity: fromCity || tripDetails.fromCity,
//         toCity: toCity || tripDetails.toCity,
//         travelType: travelType || tripDetails.travelType,
//         // Format the date from yyyy-MM-dd to Month Day, Year
//         travelDate: travelDate ? new Date(travelDate).toLocaleDateString('en-US', {
//           month: 'long',
//           day: 'numeric',
//           year: 'numeric'
//         }) : tripDetails.travelDate,
//         travelTime: travelTime || tripDetails.travelTime,
//         adultPassengers: adultPassengers || tripDetails.adultPassengers,
//         childPassengers: childPassengers || tripDetails.childPassengers,
//         mobile: mobile || tripDetails.mobile,
//         email: email || tripDetails.email,
//         name: name || tripDetails.name,
//         tarvelPackage: tarvelPackage || tripDetails.tarvelPackage,
//       });
//     }
//   }, [searchParams]);

//   // Function to handle booking and redirect to WhatsApp
//   const handleBookNow = (cab: any) => {
//     const price = handlePrice(cab);

//     const message =
//       `🚖 *New Cab Booking Request*\n\n` +
//       `👤 *Customer Details:*\n` +
//       `• Name: ${tripDetails.name}\n` +
//       `• Email: ${tripDetails.email}\n` +
//       `• Mobile: ${tripDetails.mobile}\n\n` +
//       `🧳 *Trip Details:*\n` +
//       `• From: ${tripDetails.fromCity}\n` +
//       `• To: ${tripDetails.toCity}\n` +
//       `• Travel Type: ${tripDetails.travelType}\n` +
//       `• Date: ${tripDetails.travelDate}\n` +
//       `• Time: ${tripDetails.travelTime}\n` +
//       `• Adults: ${tripDetails.adultPassengers}\n` +
//       `• Children: ${tripDetails.childPassengers}\n\n` +
//       `🚗 *Selected Cab:*\n` +
//       `• ${cab.name}\n\n` +
//       `*Total Price*: ${price}\n\n` +
//       `Please confirm the booking at your earliest convenience. Thank you!`;

//     window.open(`https://wa.me/+917984986324?text=${encodeURIComponent(message)}`);
//   };


//   const handlePrice = (cab: Cab) => {
//     const price = getFlatPrice(
//       tripDetails.fromCity,
//       tripDetails.toCity,
//       cab.type,
//       tripDetails.travelType
//     );
//     return price;
//   };


//   return (
//     <section className="min-h-screen bg-background">
//       {/* Header Banner */}
//       <div className="relative w-full">
//         <div className="w-full relative h-64 bg-foreground">
//           <div className="flex flex-col items-center text-center pt-16">
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent">
//               Our Cabs, Your Journey
//             </h1>
//             <p className="text-primary text-sm md:text-base mt-2 mx-w-xl ">
//               Choose from our premium vehicles for a comfortable travel experience
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto py-8 px-4 ">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
//           <div className="lg:col-span-1">
//             <div className="sticky top-18">
//               <Card className="shadow-md border border-accent-foreground/20 bg-card ">
//                 <CardHeader className="bg-accent/10 mt-5 border-b border-border">
//                   <CardTitle className="text-xl">Trip Details</CardTitle>
//                   <CardDescription>Your journey information</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4 grid md:grid-cols-2">
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-primary/10 p-2 rounded-full">
//                       <User className="h-5 w-5 text-primary" />
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm text-muted-foreground">Name</p>
//                       <p className="font-medium">{tripDetails.name}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-primary/10 p-2 rounded-full">
//                       <PhoneCall className="h-5 w-5 text-primary" />
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm text-muted-foreground">Phone Number</p>
//                       <p className="font-medium">{tripDetails.mobile}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-primary/10 p-2 rounded-full">
//                       <Mail className="h-5 w-5 text-primary" />
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm text-muted-foreground">Email</p>
//                       <p className="font-medium">{tripDetails.email}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-primary/10 p-2 rounded-full">
//                       <Navigation className="h-5 w-5 text-primary" />
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm text-muted-foreground">From City</p>
//                       <p className="font-medium">{tripDetails.fromCity}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-primary/10 p-2 rounded-full">
//                       <IoLocationOutline className="h-5 w-5 text-primary" />
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm text-muted-foreground">To City</p>
//                       <p className="font-medium">{tripDetails.toCity}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-primary/10 p-2 rounded-full">
//                       <IoLocationOutline className="h-5 w-5 text-primary" />
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm text-muted-foreground">Package</p>
//                       <p className="font-medium">{tripDetails.tarvelPackage}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-primary/10 p-2 rounded-full">
//                       <ArrowUp className="h-5 w-5 text-primary" />
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm text-muted-foreground">Travel Type</p>
//                       <p className="font-medium">{tripDetails.travelType}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-primary/10 p-2 rounded-full">
//                       <Calendar className="h-5 w-5 text-primary" />
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm text-muted-foreground">Travel Date</p>
//                       <p className="font-medium">{tripDetails.travelDate}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-primary/10 p-2 rounded-full">
//                       <Clock className="h-5 w-5 text-primary" />
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm text-muted-foreground">Travel Time</p>
//                       <p className="font-medium">{tripDetails.travelTime}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-primary/10 p-2 rounded-full">
//                       <GoPerson className="h-5 w-5 text-primary" />
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm text-muted-foreground">Adult Passengers</p>
//                       <p className="font-medium">{tripDetails.adultPassengers}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-primary/10 p-2 rounded-full">
//                       <FaChild className="h-5 w-5 text-primary" />
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm text-muted-foreground">Child Passengers</p>
//                       <p className="font-medium">{tripDetails.childPassengers}</p>
//                     </div>
//                   </div>
//                   <Button asChild className="w-full col-span-2">
//                     <Link href="/#booking">
//                       Modify Trip
//                     </Link>
//                   </Button>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           <div className="lg:col-span-2 pr-2">
//             <h2 className="text-xl md:text-2xl font-semibold mb-6 text-primary">Available Cabs</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {cabs.map((cab, idx) => (
//                 <motion.div
//                   key={cab.id}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: idx * 0.2 }}
//                 >
//                   <Card key={cab.id} className="cursor-pointer transition-all duration-300 overflow-hidden">
//                     <div className="relative w-full h-80 overflow-hidden">
//                       <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent dark:from-black/100 dark:via-black/80 dark:to-transparent"></div>
//                       <img
//                         src={cab.background}
//                         alt="background"
//                         className="absolute inset-0 z-0 w-full h-full object-cover opacity-75"
//                       />
//                       <motion.img
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.3, delay: 0.1 }}
//                         src={cab.image}
//                         alt={cab.name}
//                         className="relative z-50 w-full h-64 md:h-72 top-10 object-cover"
//                       />
//                       <div className="absolute inset-0 top-28 bg-accent -skew-[-40deg] w-[50rem] h-[50rem]" />
//                     </div>
//                     <CardHeader>
//                       <CardTitle className="text-2xl text-center">
//                         <motion.h1
//                           initial={{ opacity: 0, y: 10 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           transition={{ duration: 0.3, delay: 0.1 }}
//                         >
//                           {cab.name}
//                         </motion.h1>
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="flex flex-col gap-2 ">
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.3, delay: 0.1 }}
//                         className="flex items-end justify-between gap-2 text-xl">
//                         <div className="font-bold text-primary">
//                           {handlePrice(cab)}
//                         </div>
//                       </motion.div>
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.3, delay: 0.2 }}
//                         className="flex items-center justify-between gap-2 text-lg font-normal">
//                         {cab.name}
//                         <div>
//                           {`${cab.pricePerKm}/km`}
//                         </div>
//                       </motion.div>
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.3, delay: 0.2 }}
//                         className="flex items-center justify-between gap-2 text-lg font-normal">
//                         Seats:
//                         <div>
//                           {cab.seats}
//                         </div>
//                       </motion.div>
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.3, delay: 0.4 }}
//                         className="flex items-center justify-between gap-2 text-lg font-normal">
//                         Passengers:
//                         <div>
//                           {cab.passengers}
//                         </div>
//                       </motion.div>
//                     </CardContent>
//                     <CardFooter>
//                       <motion.div
//                         className="w-full"
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.3, delay: 0.1 }}
//                       >
//                         <Button
//                           variant="default"
//                           className="mt-2 w-full text-base hover:bg-accent-foreground hover:text-accent transition-all duration-300 ease-in"
//                           onClick={() => handleBookNow(cab)}
//                         >
//                           Book Now
//                         </Button>
//                       </motion.div>
//                     </CardFooter>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Cabs;


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
import { ArrowRight, Navigation, Route, Calendar, ArrowUp, Clock, User, PhoneCall, Mail, Check, Shield, InfoIcon } from "lucide-react";
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
      const tarvelPackage = searchParams.get('tarvelPackage');

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
    return price;
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-background/90">
      <div className="relative w-full overflow-hidden">
        <div className="w-full relative h-80">
          <div className="absolute inset-0">
            <img src="/road.jpg" alt="Road background" className="object-cover object-bottom brightness-50 grayscale-100 w-full h-full" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          </div>
          <div className="container relative z-10 mx-auto flex flex-col items-center text-center justify-center h-full px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary"
            >
              Premium Cab Selection
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-accent/90 text-base md:text-lg mt-4 max-w-2xl"
            >
              Choose from our luxury fleet for a comfortable and reliable journey experience
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center mt-6 gap-4"
            >
              <Badge variant="outline" className="bg-primary/10 border-accent/50 backdrop-blur text-primary px-4 py-2 text-sm rounded-lg flex items-center gap-2">
                <Check size={16} /> 24/7 Support
              </Badge>
              <Badge variant="outline" className="bg-primary/10 border-accent/50 backdrop-blur text-primary px-4 py-2 text-sm rounded-lg flex items-center gap-2">
                <Check size={16} /> Professional Drivers
              </Badge>
              <Badge variant="outline" className="bg-primary/10 border-accent/50 backdrop-blur text-primary px-4 py-2 text-sm rounded-lg flex items-center gap-2">
                <Check size={16} /> Sanitized Vehicles
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
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="shadow-lg border-0 bg-card/95 backdrop-blur-sm overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary/50"></div>
                  <div className="bg-card p-5 border-b">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl font-bold">Your Trip Details</CardTitle>
                        <CardDescription>Review your journey information</CardDescription>
                      </div>
                      <Shield className="h-6 w-6 text-primary/80" />
                    </div>
                  </div>
                  <CardContent className="space-y-6 pt-6">
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                      <h3 className="font-medium text-primary mb-2 flex items-center gap-2">
                        <Route className="h-4 w-4" /> Route Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1.5 rounded-md mt-0.5">
                            <Navigation className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">From</p>
                            <p className="font-medium">{tripDetails.fromCity}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1.5 rounded-md mt-0.5">
                            <IoLocationOutline className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">To</p>
                            <p className="font-medium">{tripDetails.toCity}</p>
                          </div>
                        </div>
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            <p className="text-xs text-muted-foreground">Email</p>
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          {/* Available Cabs */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Select Your Perfect Ride</h2>
              <p className="text-muted-foreground">Choose from our premium fleet for your journey from {tripDetails.fromCity} to {tripDetails.toCity}</p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {cabs.map((cab, idx) => (
                <motion.div
                  key={cab.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="overflow-hidden bg-accent rounded-md border-0 shadow-md transition-all duration-300 hover:shadow-xl relative">
                    <div className="absolute top-2 left-2 z-20">
                      <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-1">
                        Top Rated
                      </Badge>
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

                      <div className="md:col-span-7 p-6">
                        <div className="flex flex-col h-full">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{cab.name}</h3>
                            <div className="text-2xl font-bold text-primary">{handlePrice(cab)}</div>
                          </div>

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
                                <p className="text-xs text-muted-foreground">Price per km</p>
                                <p className="font-medium">{cab.pricePerKm}/km</p>
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
                            <div className="p-3  rounded-md">
                              <p className="text-sm font-medium border border-primary p-3 rounded-md text-primary/70 flex items-center gap-2">
                                <InfoIcon size={16} />
                                <span>Non-refundable booking with advance payment required. All fares are subject to our terms and conditions.</span>
                              </p>
                            </div>

                            <Button
                              variant="default"
                              className="w-full py-6 text-base bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                              onClick={() => handleBookNow(cab)}
                            >
                              Book Now and Pay
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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