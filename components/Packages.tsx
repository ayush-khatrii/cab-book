'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const packages = [
  {
    title: 'Dwarka | Somnath | Mata No Madh',
    image: "/somnath.png"
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
    <section className="py-16 px-4 md:px-10 ">
      <div className="flex flex-col items-center text-center justify-center py-10">
        <p className="text-primary text-base md:text-xl font-semibold">
          Sacred places, smooth travel.
        </p>
        <h1 className="text-2xl md:text-4xl font-bold mt-2">Explore Our Cab Packages</h1>
      </div>

      <div className="max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "center",
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
                <Card className="overflow-hidden border shadow-md hover:shadow-lg transition-shadow duration-300 h-full group cursor-pointer">
                  <div className="relative w-full h-64 md:h-72 overflow-hidden bg-muted">
                    <Image
                      width={400}
                      height={300}
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 bg-background">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {pkg.title}
                    </h3>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-3 mt-8">
            <CarouselPrevious className="static translate-y-0 h-10 w-10" />
            <CarouselNext className="static translate-y-0 h-10 w-10" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Packages
