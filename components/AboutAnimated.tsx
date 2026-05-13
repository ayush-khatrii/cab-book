"use client";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Car } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const AboutAnimated = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto mt-10 relative overflow-hidden bg-background">
      <div
        className={cn(
          "absolute inset-0 -z-50 opacity-50",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)]"
        )}
      />
      <div className="container z-50 mx-auto flex flex-col md:flex-row items-center gap-10 md:px-0 px-6">
        <motion.div
          className="md:w-1/2 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            width={500}
            height={400}
            className="w-full h-full object-cover rounded-2xl border border-border shadow-sm"
            src="/swift-dzire.png"
            alt="Cab Image"
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="font-bold text-primary text-3xl">About Us</h2>
          <h2 className="font-bold text-2xl md:text-4xl leading-tight md:max-w-xl text-foreground">
            Welcome to Shivay Safar Best Cab Service in Gandhidham
          </h2>
          <p className="text-lg text-muted-foreground">
            Shivay Safar is proud to be recognized as the{" "}
            <span className="font-bold text-foreground">best cab service in Gandhidham</span>.
            Experience the ease of 24/7 booking support and professional drivers
            who care about your journey. Choose comfort. Choose reliability.
            Choose Shivay Safar!
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
            className="flex items-center gap-5 flex-col md:flex-row"
          >
            <Button className="w-full md:w-auto">
              <Link href="/cabs">Explore Our Cabs</Link>
            </Button>
            <Button variant="ghost" className="text-base md:w-auto text-primary">
              <a href="tel:+917984986324">Call Us at +91 79849 86324</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div className="pointer-events-none -z-40 absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </section>
  );
};

export default AboutAnimated;