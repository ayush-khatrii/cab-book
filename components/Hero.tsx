"use client";
import { FaTaxi, FaPhoneAlt, FaArrowDown } from 'react-icons/fa';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div className="absolute w- inset-0 z-0">
        <img
          alt="Luxury car service"
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl leading-normal lg:text-6xl font-bold mb-4 text-white">
            Royalty on Wheels{" "}
            <span className='text-accent '>
              Shivay Safar
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            Experience the perfect harmony of reliability, luxury, and affordability with every journey across the city
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="default"
            ><a href="#book">

                Book a Cab
              </a>
            </Button>

            <Button
              size="lg"
              variant="secondary"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;