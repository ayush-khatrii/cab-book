import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[80vh] bg-transparent overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 opacity-30",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#F5F5DC_1px,transparent_.5px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] dark:bg-white"></div>

      <div className="relative z-10 container mx-auto h-full flex flex-col items-start justify-center px-4 md:px-8">
        <div className="">
          <h1 className="text-accent-foreground text-4xl md:text-6xl max-w-2xl md:leading-tight font-bold mb-6">
            Drive the City in Style with Shivay Safar
          </h1>
          <p className="text-lg md:text-xl max-w-xl font-normal mb-8 text-accent-foreground">
            Book Hassle-Free Rides with Shivay Safar — Comfort, Reliability, and Pride in Every Mile.
          </p>
        </div>
        <Button size="lg">
          Book Your Ride Now
          <ArrowRight size={20} className='group-hover:translate-x-1.5 transition-all duration-150 ease-in-out' />
        </Button>
      </div>

      <div className="absolute z-20 top-10 hidden xl:block right-0 w-full max-w-4xl">
        <div className="absolute top-0 -right-80 w-[1000px] h-[1000px] bg-primary transform rotate-12 origin-bottom-right"></div>
        <div className="absolute top-10 -right-96 w-[900px] h-[900px] bg-accent-foreground/90 transform rotate-12 origin-bottom-right"></div>
        <img
          className="w-full h-auto object-contain scale-x-[-1] relative z-10 drop-shadow-2xl"
          src="/xl6.png"
          alt="Luxury cab service vehicle"
        />
      </div>
    </section>
  );
};

export default Hero;