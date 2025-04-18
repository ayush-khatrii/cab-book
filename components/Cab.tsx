"use client"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { cabs } from "@/constants";
import Link from "next/link";


const CabList = () => {
  return (
    <section className="py-12 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center justify-center py-10">
        <p className="text-primary text-base md:text-xl font-semibold ">Your Ride, Your Choice</p>
        <h1 className="text-2xl md:text-3xl font-bold">Book Your Trusted Cab Now</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-0 px-5">
        {cabs.map((cab, idx) => (
          <motion.div
            key={cab.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.2 }}
          >
            <Card key={cab.id} className="cursor-pointer transition-all duration-300 overflow-hidden">
              <div className="relative w-full h-80 overflow-hidden border-b border-foreground/10">
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
                  className="relative z-10 w-full h-64 top-10 object-cover"
                />
                <div className="absolute inset-0 top-28 bg-accent -skew-[-40deg] w-[50rem] h-[50rem]" />
                <Badge
                  variant={"default"}
                  className="absolute rounded-l-none font-medium text-base bottom-0 border left-0 p-2 z-20">
                  ₹{cab.pricePerKm}/km
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-base font-semibold md:text-xl">
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
                  className="flex items-center justify-between text-base gap-2 font-normal">
                  {cab.name}
                  <div>
                    ₹{cab.pricePerKm}/km
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex items-center justify-between text-base gap-2 font-normal">
                  Seats:
                  <div>
                    {cab.seats}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="flex items-center justify-between text-base gap-2  font-normal">
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
                    className="mt-2 w-full text-base hover:bg-accent-foreground hover:text-accent transition-all duration-300 ease-in">
                    <Link href="/#booking">
                      Book Now
                    </Link>
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div>
        <Button asChild variant="link" className="group text-center flex justify-center items-center mt-5">
          <a href="/cabs">
            See All <ArrowRight className="w-4 h-4  group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CabList;
