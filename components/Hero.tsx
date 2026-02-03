import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[80vh] bg-background overflow-hidden">
      {/* Grid pattern background */}
      <div
        className={cn(
          "absolute inset-0 opacity-30",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(hsl(var(--muted-foreground)/0.3)_1px,transparent_1px)]",
        )}
      />

      {/* Gradient mask overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col items-start justify-center px-4 md:px-8">
        <div>
          <h1 className="text-4xl md:text-6xl max-w-2xl md:leading-tight font-bold mb-6 text-foreground">
            Drive the City in Style with Shivay Safar
          </h1>
          <p className="text-lg md:text-xl max-w-xl font-normal mb-8 text-muted-foreground">
            Book Hassle-Free Rides with Shivay Safar — Comfort, Reliability, and Pride in Every Mile.
          </p>
        </div>
        <Button size="lg" asChild>
          <Link href="/#booking" className="flex items-center gap-2 group">
            Book Your Ride Now
            <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-all duration-150 ease-in-out" />
          </Link>
        </Button>
      </div>

      {/* Decorative image section */}
      <div className="absolute z-20 top-10 hidden xl:block right-0 w-full max-w-4xl">
        {/* Background decorative boxes */}
        <div className="absolute top-0 -right-80 w-[1000px] h-[1000px] bg-primary transform rotate-12 origin-bottom-right"></div>
        <div className="absolute top-10 -right-96 w-[900px] h-[900px] bg-primary/90 transform rotate-12 origin-bottom-right"></div>

        {/* Car image */}
        <img
          className="w-full h-auto object-cover relative z-10 drop-shadow-2xl"
          src="/xl6.png"
          alt="Luxury cab service vehicle"
        />
      </div>
    </section>
  );
}