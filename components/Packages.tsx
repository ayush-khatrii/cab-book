'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const packages = [
  {
    title: 'Dwarka | Somnath | Mata No Madh',
    image: "/somnath.png"
  },
  {
    title: 'Udaipur | Mount Abu | Ambaji',
    image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT2ixf9f5lqqzRjitu-cdrfi8rdFiWVj0gs5TsO4d4wimkoj3HFPZiCBjTbvpb3L9VNmJ1NWKCCx6k3ZNVuhBfy58pfpk_EvU7D1FbFnQ',
  },
  {
    title: 'Statue of  Unity',
    image: "/unity.png"
  },
  {
    title: 'Jaipur | Ajmer | Pushkar',
    image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT2ixf9f5lqqzRjitu-cdrfi8rdFiWVj0gs5TsO4d4wimkoj3HFPZiCBjTbvpb3L9VNmJ1NWKCCx6k3ZNVuhBfy58pfpk_EvU7D1FbFnQ',
  },
]

const Packages = () => {
  return (
    <div className="py-10 px-4 md:px-10">
      <div className="flex flex-col items-center text-center justify-center py-10">
        <p className="text-primary text-base md:text-xl font-semibold">
          Sacred places, smooth travel.
        </p>
        <h1 className="text-2xl md:text-3xl font-bold">Explore Our Cab Packages</h1>
      </div>

      <Carousel
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent>
          {packages.map((pkg, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="overflow-hidden border shadow">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-[320px] object-cover object-center"
                />
                <CardContent className="">
                  <h3 className="text-lg font-semibold">{pkg.title}</h3>
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
    </div>
  )
}

export default Packages
