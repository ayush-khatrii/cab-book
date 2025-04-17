"use client";
import * as React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TbTransfer } from "react-icons/tb";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const cabRoutes = [
  {
    id: 1,
    from: "Gandhidham",
    to: "Ahmedabad Airport",
    description: "Smooth highway rides between two major cities.",
    image: "/ahm-airport.png",
  },
  {
    id: 2,
    from: "Gandhidham",
    to: "Rajkot",
    description: "Quick and comfortable travel to Navsari.",
    image: "/rajkot.jpg"
  },
  {
    id: 3,
    from: "Ahmedabad",
    to: "Rajkot",
    description: "Fast trips between Rajkot and Jamnagar.",
    image: "/ahmedabad.jpg"
  },
  {
    id: 4,
    from: "Bhuj",
    to: "Ahmedabad",
    description: "Reliable rides connecting Bhavnagar and Ahmedabad.",
    image: "/bhuj-img.jpg",
  },
  {
    id: 5,
    from: "Bhuj",
    to: "Rajkot",
    description: "Short, convenient transfers between cities.",
    image: "/rajkot.jpg"
  },
];

const CabRoutes = () => {
  return (
    <section className="py-12 max-w-7xl mx-auto px-5 lg:px-3">
      <div className="flex flex-col items-center text-center justify-center py-10">
        <p className="text-primary text-base md:text-xl font-semibold">
          One-Way Rides, Top Routes
        </p>
        <h1 className="text-2xl md:text-3xl font-bold">Ride Gujarat’s best cab routes </h1>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="">
          {cabRoutes.map((route) => (
            <CarouselItem key={route.id} className="md:basis-1/3 ">
              <Card className="overflow-hidden border shadow">
                <img
                  src={route.image}
                  alt={route.from}
                  className="w-full h-[320px] object-over"
                />
                <CardContent className="">
                  <div className="flex items-center ">
                    <h3 className="text-lg font-semibold">{route.from}</h3>
                    <TbTransfer className="text-primary h-9 w-9 px-2" />
                    <h3 className="text-lg font-semibold">{route.to}</h3>
                  </div>
                  <div>
                    <Button className="group ">
                      Book Now <ArrowRight className="group-hover:translate-x-1.5 transition-all duration-150 ease-in-out" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -bottom-7 left-1/2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
};

export default CabRoutes;
