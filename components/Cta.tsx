'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, PhoneCall, MapPin, Mail } from "lucide-react"

const Cta = () => {
  return (
    <section className="md:rounded-3xl max-w-7xl border border-primary mx-auto mt-20 px-6 py-14 bg-gradient-to-r from-primary/60 via-primary to-primary relative overflow-hidden shadow-xl">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/20 blur-3xl rounded-full z-0" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/20 blur-3xl rounded-full z-0" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/10 blur-2xl rounded-full z-0" />

      <div className="grid md:grid-cols-2 items-center gap-10 z-10 relative">
        {/* Left Content Section */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-black mb-2">
            ⭐ Top-rated cab service in Gandhidham
          </div>

          <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Your Journey, Our Priority 🚕
          </h2>

          <p className="text-black/80 text-lg max-w-md md:max-w-3xl">
            Book your ride in seconds and enjoy a comfortable travel experience to any destination. Safe, reliable, and always on time.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              variant="secondary"
              size="lg"
              className="bg-black hover:bg-black/80 text-white font-medium px-6 shadow-lg"
            >
              Book Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="secondary" size="lg"
              className="shadow-md">
              Our Services
            </Button>
          </div>
          <div className="hidden md:block ">
            <img
              src="/white-logo.png"
              alt="Comfortable Taxi Service"
              className="absolute -top-36 -right-12 size-80 object-cover p-4"
            />
          </div>
        </div>

        {/* Right Image Section */}

        <div className="hidden md:block relative h-64 md:h-96 overflow-hidden">
          <div className="absolute flex items-center justify-center">
            <img
              src="/innova-img.png"
              alt="Comfortable Taxi Service"
              className="w-full h-full object-cover p-4"
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 z-20 bg-accent/80 backdrop-blur-sm p-4 rounded-xl">
            <p className="font-medium text-foreground">Premium Cab service available 24/7 for your travel needs</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta