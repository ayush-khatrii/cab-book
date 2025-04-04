import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-accent py-16">
      <div className="container max-w-7xl mx-auto px-5 flex flex-col lg:flex-row justify-between items-center">
        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="logo.png" />
        </div>

        <div className="lg:w-1/2 w-full lg:pl-10 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">About Us</h2>
          <p className="text-accent-foreground text-base md:text-lg leading-relaxed">
            We are committed to providing top-notch cab booking services,
            ensuring a seamless and comfortable journey. Our professional
            drivers and well-maintained vehicles guarantee a safe and pleasant
            travel experience. Your satisfaction is our priority!
          </p>
          <Button className="mt-3 group">
            Know More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ease-in-out" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
