'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"

const Cta = () => {
  return (
    <section className="rounded-3xl max-w-7xl mb-10 mx-auto mt-20 px-6 py-14 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 relative overflow-hidden">
      <div className="grid md:grid-cols-2 items-center gap-10 z-10 relative">
        {/* Left Text Content */}
        <div>
          <h2 className="text-accent-foreground text-3xl md:text-4xl font-bold leading-tight mb-4">
            Every traveler deserves a smooth journey 🚕
          </h2>
          <p className="text-foreground text-lg md:text-xl mb-6">
            Book your cab in seconds and travel with comfort across top destinations.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" >
              ✨ Book Now
            </Button>
          </div>
        </div>

        {/* Mobile App / Booking Preview Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/xl6.png" // replace with your actual image path
            alt="Taxi Booking Preview"
            width={350}
            height={350}
            className="absolute object-center object-cover"
          />
        </div>
      </div>

      {/* Decorative Blob or Gradient Glow */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-white/20 blur-3xl rounded-full z-0" />
      <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-white/20 blur-3xl rounded-full z-0" />
    </section>
  )
}

export default Cta
