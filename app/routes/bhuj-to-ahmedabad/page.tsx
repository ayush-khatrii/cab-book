import Link from "next/link";
import { FaCarSide, FaClock, FaRupeeSign, FaShieldAlt } from "react-icons/fa";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Bhuj to Ahmedabad Taxi | Safe & Comfortable Cab Service - Shivay Safar",
  description: "Book a reliable Bhuj to Ahmedabad taxi with Shivay Safar. Enjoy premium travel with verified drivers, transparent pricing, and 24/7 support. Book your cab today!",
  keywords: [
    "Bhuj to Ahmedabad taxi",
    "Bhuj to Ahmedabad cab",
    "Ahmedabad airport drop from Bhuj",
    "one way taxi Bhuj to Ahmedabad",
    "best taxi service in Bhuj",
    "Kutch to Ahmedabad cab fare"
  ],
  alternates: {
    canonical: "https://shivaysafar.com/routes/bhuj-to-ahmedabad",
  },
  openGraph: {
    title: "Bhuj to Ahmedabad Taxi Service | Shivay Safar",
    description: "Premium intercity travel from Bhuj to Ahmedabad. Safe, punctual, and affordable one-way or round-trip cabs.",
    url: "https://shivaysafar.com/routes/bhuj-to-ahmedabad",
    type: "website",
    images: [{ url: "/og-bhuj-ahmedabad.jpg", width: 1200, height: 630 }]
  }
};

export default function RoutePage() {
  return (
    <section className="w-full bg-background text-foreground">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-6">
          <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider border border-primary/20">
            Trusted by 1000+ Travelers
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Bhuj to <span className="text-primary">Ahmedabad</span> Taxi
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Reliable door-to-door transportation from the heart of Kutch to Ahmedabad. Experience safety and comfort with our premium intercity fleet.
          </p>
          <div className="pt-4">
            <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg transition-transform hover:scale-105" asChild>
              <Link href="/#booking">Book Your Ride Now</Link>
            </Button>
          </div>
        </div>

        {/* SEO Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <FeatureCard
            icon={<FaCarSide />}
            title="Premium Fleet"
            desc="Well-maintained Sedans and SUVs equipped with AC and GPS for a smooth ride."
          />
          <FeatureCard
            icon={<FaClock />}
            title="24/7 Availability"
            desc="Book your ride any time of the day or night. We ensure 100% punctuality."
          />
          <FeatureCard
            icon={<FaRupeeSign />}
            title="Transparent Fare"
            desc="Get upfront quotes with no hidden taxes or unexpected surge pricing."
          />
          <FeatureCard
            icon={<FaShieldAlt />}
            title="Safety Focused"
            desc="Our drivers are background-checked highway experts for your peace of mind."
          />
        </div>

        {/* Content Section for SEO Crawling */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-accent/30 p-8 md:p-12 rounded-3xl border border-border">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Your Premium Travel Experience</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Shivay Safar provides the most reliable <strong>Bhuj to Ahmedabad taxi service</strong>. Whether you're traveling for a medical appointment, a business meeting, or an airport transfer, we ensure you reach your destination on time and in total comfort.
              </p>
              <ul className="space-y-2 list-inside list-disc">
                <li>Professional door-to-door pickup and drop</li>
                <li>One-way and round-trip booking options available</li>
                <li>Hassle-free transfers to SVPI Airport Ahmedabad</li>
                <li>Transparent billing and professional driver behavior</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 bg-background p-6 rounded-2xl border border-border shadow-sm">
            <h3 className="text-xl font-bold">Trip Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b py-2">
                <span className="text-muted-foreground">Approx Distance:</span>
                <span className="font-semibold">330 KM</span>
              </div>
              <div className="flex justify-between border-b py-2">
                <span className="text-muted-foreground">Travel Time:</span>
                <span className="font-semibold">6 - 7 Hours</span>
              </div>
              <div className="flex justify-between border-b py-2">
                <span className="text-muted-foreground">Base Fare:</span>
                <span className="font-semibold text-primary">Starts at ₹11/km</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Vehicles:</span>
                <span className="font-semibold">Sedan, SUV, Innova</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-background border border-border p-8 rounded-2xl transition-all hover:border-primary/50 hover:shadow-md group">
      <div className="text-3xl text-primary mb-4 transition-transform group-hover:scale-110">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </div>
  );
}