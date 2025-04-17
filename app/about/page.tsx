"use client"
import { Mail, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <div className="bg-primary relative flex justify-center items-center  text-primary-foreground h-60">
          <div className="container relative z-10 mx-auto flex flex-col items-center text-center justify-center h-full px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent"
            >
              Discover Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-accent/90 text-base md:text-lg mt-4 max-w-2xl"
            >
              At Shivay Safar, we transform ordinary trips into extraordinary journeys.

            </motion.p>
          </div>
          {/* <div className="absolute inset-0">
            <img src="/about.jpg" alt="Road background" className="object-cover object-center brightness-50 grayscale-100 w-full h-full" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          </div> */}
        </div>

        <div className="pt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-center mb-8 text-foreground">About Shivay Safar</motion.h2>
              <div className="prose text-accent-foreground mb-10">
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4">
                  At Shivay Safar, we believe that every journey has the power to transform lives. Founded with a passion for creating meaningful travel experiences, we're not just another travel company—we're your companions in discovery.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4">
                  Our team of seasoned explorers curates journeys that balance adventure with comfort, authenticity with convenience. Whether you're seeking the thrill of unexplored trails or the serenity of perfect retreats, we craft each itinerary with meticulous attention to detail.
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-xl font-semibold text-foreground mt-8 mb-4">Our Approach</motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4">
                  We listen first. Your travel dreams and preferences shape every recommendation we make. Our expertise simply brings those dreams to life in ways you might not have imagined possible.
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-6 md:text-center text-foreground">Contact Us</h3>
              <div className="flex flex-col md:flex-row justify-center items-start space-y-4 md:space-y-0 md:space-x-12 text-primary">
                {/* Email */}
                <div className="flex items-center ease-in-out hover:underline transitiona-all duration-300 hover:-translate-y-2.5">
                  <Mail className="size-5 mr-2" />
                  <a href="mailto:shivaysafar99@gmail">shivaysafar99@gmail.com</a>
                </div>

                {/* Phone */}
                <div className="flex items-center ease-in-out hover:underline transitiona-all duration-300 hover:-translate-y-2.5">
                  <Phone className="size-5 mr-2" />
                  <a href="tel:+919876543210">+91 79849 86324</a>
                </div>

                {/* Instagram */}
                <div className="flex items-center ease-in-out hover:underline transitiona-all duration-300 hover:-translate-y-2.5">
                  <FaInstagram className="size-5 mr-2" />
                  <a
                    href="https://www.instagram.com/shivay_safar_9/"
                  >Follow us on Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;