'use client'

import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const packages = [
  {
    title: 'Dwarka | Somnath | Mata No Madh',
    image: "/somnath.png" // Ensure this is lowercase in your /public folder
  },
  {
    title: 'Udaipur | Mount Abu | Ambaji',
    image: "/mount-abu.jpg"
  },
  {
    title: 'Statue of Unity',
    image: "/unity.png"
  },
  {
    title: 'Jaipur | Ajmer | Pushkar',
    image: "/jaipur.webp"
  },
]

const Packages = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-background" aria-labelledby="packages-title">
      <div className="flex flex-col items-center text-center justify-center py-10">
        <p className="text-primary text-base md:text-xl font-semibold tracking-wide">
          Sacred places, smooth travel.
        </p>
        <h2 id="packages-title" className="text-2xl md:text-4xl font-extrabold mt-2 tracking-tight">
          Explore Our Cab Packages
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {packages.map((pkg, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 h-full group cursor-pointer bg-card">
                  <div className="relative w-full h-64 md:h-80 overflow-hidden">
                    <Image
                      fill // Fills the container for better responsive control
                      src={pkg.image}
                      alt={`Travel package for ${pkg.title}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300 leading-snug">
                      {pkg.title}
                    </h3>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-4 mt-10">
            <CarouselPrevious
              className="static translate-y-0 h-12 w-12 border-primary text-primary hover:bg-primary hover:text-white"
              aria-label="Previous package"
            />
            <CarouselNext
              className="static translate-y-0 h-12 w-12 border-primary text-primary hover:bg-primary hover:text-white"
              aria-label="Next package"
            />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Packages