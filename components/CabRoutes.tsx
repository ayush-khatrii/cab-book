"use client";
import * as React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { TbTransfer } from "react-icons/tb";
import { useOutOfStationStore } from "@/store/outofstation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cabRoutes } from "@/constants";
import { useRouter } from "next/navigation";
import { toast } from "sonner"

interface CabRoutesProps {
  id: number,
  from: string,
  to: string,
  description: string,
  image: string,
}
const CabRoutes = () => {
  const [selectedRoute, setSelectedRoute] = useState<CabRoutesProps>();
  const { setMainTab, setSelectedTab, setOnewayData } = useOutOfStationStore();

  const router = useRouter();

  const handleClick = (route: CabRoutesProps) => {
    setOnewayData({
      pickUp: route?.from,
      dropOff: route?.to,
    });
    setMainTab("outofstation");
    setSelectedTab("oneway");

    toast.success("Route selected. Please fill your details to book.");
    setTimeout(() => {
      router.push(`/#booking`);
    }, 500);
  }
  return (
    <section className="py-12 max-w-7xl mx-auto px-5 lg:px-3">
      <div className="flex flex-col items-center text-center justify-center py-10">
        <p className="text-primary text-base md:text-xl font-semibold">
          One-Way Rides, Top Routes
        </p>
        <h1 className="text-2xl md:text-3xl font-bold">Ride Gujarat's best cab routes </h1>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="">
          {cabRoutes.map((route) => (
            <CarouselItem key={route.id} className="md:basis-1/3">
              <Card className="overflow-hidden border shadow">
                <img
                  src={route.image}
                  alt={route.from}
                  className="w-full h-[320px] object-cover"
                />
                <CardContent className="p-4">
                  <div className="flex items-center mb-4">
                    <h3 className="text-lg font-semibold">{route.from}</h3>
                    <TbTransfer className="text-primary h-9 w-9 px-2" />
                    <h3 className="text-lg font-semibold">{route.to}</h3>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        Know More
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          <span className="flex items-center gap-3 ">
                            {route.from} <TbTransfer className="text-primary" /> {route.to}
                          </span>
                        </DialogTitle>
                        <DialogDescription>
                          {route.description}
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                          <Button
                            onClick={() => handleClick(route)}
                            type="button"
                            variant="default">
                            Quick Book Now
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 flex gap-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section >
  );
};

export default CabRoutes;