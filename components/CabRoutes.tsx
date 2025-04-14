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

const cabRoutes = [
  {
    id: 1,
    from: "Ahmedabad",
    to: "Vadodara",
    description: "Smooth highway rides between two major cities.",
    image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT2ixf9f5lqqzRjitu-cdrfi8rdFiWVj0gs5TsO4d4wimkoj3HFPZiCBjTbvpb3L9VNmJ1NWKCCx6k3ZNVuhBfy58pfpk_EvU7D1FbFnQ",
  },
  {
    id: 2,
    from: "Surat",
    to: "Navsari",
    description: "Quick and comfortable travel to Navsari.",
    image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT2ixf9f5lqqzRjitu-cdrfi8rdFiWVj0gs5TsO4d4wimkoj3HFPZiCBjTbvpb3L9VNmJ1NWKCCx6k3ZNVuhBfy58pfpk_EvU7D1FbFnQ",
  },
  {
    id: 3,
    from: "Rajkot",
    to: "Jamnagar",
    description: "Fast trips between Rajkot and Jamnagar.",
    image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT2ixf9f5lqqzRjitu-cdrfi8rdFiWVj0gs5TsO4d4wimkoj3HFPZiCBjTbvpb3L9VNmJ1NWKCCx6k3ZNVuhBfy58pfpk_EvU7D1FbFnQ",
  },
  {
    id: 4,
    from: "Bhavnagar",
    to: "Ahmedabad",
    description: "Reliable rides connecting Bhavnagar and Ahmedabad.",
    image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT2ixf9f5lqqzRjitu-cdrfi8rdFiWVj0gs5TsO4d4wimkoj3HFPZiCBjTbvpb3L9VNmJ1NWKCCx6k3ZNVuhBfy58pfpk_EvU7D1FbFnQ",
  },
  {
    id: 5,
    from: "Gandhinagar",
    to: "Ahmedabad",
    description: "Short, convenient transfers between cities.",
    image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT2ixf9f5lqqzRjitu-cdrfi8rdFiWVj0gs5TsO4d4wimkoj3HFPZiCBjTbvpb3L9VNmJ1NWKCCx6k3ZNVuhBfy58pfpk_EvU7D1FbFnQ",
  },
  {
    id: 6,
    from: "Junagadh",
    to: "Somnath",
    description: "Scenic routes to the famous Somnath temple.",
    image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT2ixf9f5lqqzRjitu-cdrfi8rdFiWVj0gs5TsO4d4wimkoj3HFPZiCBjTbvpb3L9VNmJ1NWKCCx6k3ZNVuhBfy58pfpk_EvU7D1FbFnQ",
  },
  {
    id: 7,
    from: "Dwarka",
    to: "Porbandar",
    description: "Ride along the coast between historic cities.",
    image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT2ixf9f5lqqzRjitu-cdrfi8rdFiWVj0gs5TsO4d4wimkoj3HFPZiCBjTbvpb3L9VNmJ1NWKCCx6k3ZNVuhBfy58pfpk_EvU7D1FbFnQ",
  },
];

const CabRoutes = () => {
  return (
    <section className="py-12 max-w-7xl mx-auto px-5 lg:px-3">
      <div className="flex flex-col items-center text-center justify-center py-10">
        <p className="text-primary text-base md:text-xl font-semibold">
          Ride to Popular Routes
        </p>
        <h1 className="text-2xl md:text-3xl font-bold">Top Cab Routes in Gujarat</h1>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {cabRoutes.map((route) => (
            <CarouselItem key={route.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2 h-full">
                <Card className="flex flex-col overflow-hidden rounded-2xl shadow-md h-[300px]">
                  {/* Image section */}
                  <div className="h-52 w-full">
                    <img
                      src={route.image}
                      alt={`${route.from} to ${route.to}`}
                      className="w-full h-full object-cover rounded-t-2xl"
                    />
                  </div>

                  {/* Content section */}
                  <CardContent className="flex flex-col justify-between gap-3">
                    <div className="flex items-center gap-2 text-lg font-semibold">
                      <span>{route.from}</span>
                      <TbTransfer className="h-5 w-5 text-primary" />
                      <span>{route.to}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{route.description}</p>
                  </CardContent>
                </Card>
              </div>
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
