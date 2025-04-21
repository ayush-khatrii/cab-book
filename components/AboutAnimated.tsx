"use client";
import { Button } from './ui/button';
import { motion } from "framer-motion";
import { Car } from 'lucide-react';
import Link from 'next/link';

const AboutAnimated = () => {
  return (
    <section className='py-20 mt-10 overflow-hidden'>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:px-0 px-6">
        <motion.div
          className="md:w-1/2 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            className='w-full h-full object-cover rounded-2xl'
            src="/swift-dzire.png"
            alt="Cab Image"
          />
        </motion.div>

        <motion.div
          className='flex flex-col gap-4 md:w-1/2'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className='font-bold text-primary text-3xl'>About Us</h2>
          <h2 className='font-bold text-2xl md:text-4xl leading-tight md:max-w-xl'>
            Welcome to Shivay Safar
            Best Cab Service in Gandhidham
          </h2>
          <p className='text-xl text-accent-foreground/80'>
            Shivay Safar is proud to be recognized as the <span className='font-bold'>best cab service in Gandhidham</span>.
            Experience the ease of 24/7 booking support and professional drivers who care about your journey.
            Choose comfort. Choose reliability. Choose Shivay Safar!
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
            className='flex items-center gap-5 flex-col md:flex-row'>
            <Button className="w-full md:w-auto">
              <Link href="/cabs">
                Explore Our Cabs
              </Link>
            </Button>
            <Button variant="ghost" className='text-xl md:w-auto text-primary'>
              <a href="tel:+917984986324">
                Call Us at +91 79849 86324
              </a>
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutAnimated;
