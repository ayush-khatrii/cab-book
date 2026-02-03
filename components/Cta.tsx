"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="relative bg-primary overflow-hidden mx-auto my-12 md:rounded-xl shadow-lg max-w-7xl">
      <div className="relative flex px-6 py-10 md:py-12 md:min-h-[320px]">
        <div className="relative z-10 max-w-md">
          <h2 className="text-3xl text-primary-foreground md:text-4xl font-bold mb-4">
            Your Journey, Our Priority 🚕
          </h2>
          <p className="text-base text-primary-foreground/80 mb-6">
            Book your ride in seconds and enjoy a comfortable travel experience
            to any destination. Safe, reliable, and always on time.
          </p>
          <Button
            variant="secondary"
            className="font-medium px-8 py-2"
            asChild
          >
            <Link href="/#booking">Book Now</Link>
          </Button>
          <Button variant="link" className="mx-3 text-primary-foreground/90 hover:text-primary-foreground" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        <div className="hidden md:block absolute top-44 -right-60 transform -translate-y-1/2 md:w-[70%] h-auto z-20">
          <img
            src="/dzire.png"
            alt="Cab Image"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Decorative blur elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-foreground/10 blur-3xl rounded-full z-0" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-foreground/10 blur-3xl rounded-full z-0" />
    </section>
  );
};

export default Cta;