import Link from "next/link";
import { FaCarSide, FaClock, FaRupeeSign, FaShieldAlt } from "react-icons/fa";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Gandhidham to Rajkot Taxi | Fast & Reliable Cab Service - Shivay Safar",
  description: "Book a premium Gandhidham to Rajkot taxi with Shivay Safar. Enjoy comfortable rides with verified drivers and transparent pricing. 24/7 availability for all your travel needs.",
  keywords: [
    "Gandhidham to Rajkot taxi",
    "Gandhidham to Rajkot cab",
    "Rajkot airport drop from Gandhidham",
    "one way taxi Gandhidham to Rajkot",
    "best taxi service in Gandhidham",
    "Kutch to Rajkot cab fare"
  ],
  alternates: {
    canonical: "https://shivaysafar.com/routes/gandhidham-to-rajkot",
  },
  openGraph: {
    title: "Gandhidham to Rajkot Taxi Service | Shivay Safar",
    description: "Travel from Gandhidham to Rajkot in comfort. Reliable one-way and round-trip cab services at the best rates.",
    url: "https://shivaysafar.com/routes/gandhidham-to-rajkot",
    type: "website",
    images: [{ url: "/og-rajkot.jpg", width: 1200, height: 630 }]
  }
};

export default function RoutePage() {
  return (
    <section className="w-full bg-background text-foreground">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-6">
          <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider border border-primary/20">
            Preferred Choice for Commuters
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Gandhidham to <span className="text-primary">Rajkot</span> Taxi
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            The fastest and most comfortable way to travel to the heart of Saurashtra. Professional drivers and well-maintained cars at your doorstep.
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
            title="Modern Fleet"
            desc="Choose from a variety of AC Sedans and SUVs tailored for long-distance comfort."
          />
          <FeatureCard
            icon={<FaClock />}
            title="Instant Booking"
            desc="Get confirmed rides within minutes with our 24/7 dispatch system."
          />
          <FeatureCard
            icon={<FaRupeeSign />}
            title="Affordable Rates"
            desc="Competitive pricing with full transparency on tolls and allowances."
          />
          <FeatureCard
            icon={<FaShieldAlt />}
            title="Safety First"
            desc="Trained highway experts ensure a secure journey for you and your family."
          />
        </div>

        {/* Content Section for SEO Crawling */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-accent/30 p-8 md:p-12 rounded-3xl border border-border">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Your Trusted Travel Partner</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Shivay Safar offers a seamless <strong>Gandhidham to Rajkot taxi service</strong> designed for both business professionals and leisure travelers. We specialize in providing timely transfers to the Rajkot Airport and various commercial hubs.
              </p>
              <ul className="space-y-2 list-inside list-disc">
                <li>Pick-ups from Gandhidham, Adipur, and Mundra</li>
                <li>Hassle-free airport drops and railway transfers</li>
                <li>Experienced drivers with deep knowledge of Gujarat highways</li>
                <li>Transparent billing with no surprise costs</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 bg-background p-6 rounded-2xl border border-border shadow-sm">
            <h3 className="text-xl font-bold">Quick Route Info</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b py-2">
                <span className="text-muted-foreground">Approx Distance:</span>
                <span className="font-semibold">188 km</span>
              </div>
              <div className="flex justify-between border-b py-2">
                <span className="text-muted-foreground">Travel Time:</span>
                <span className="font-semibold">3.5 - 4 Hours</span>
              </div>
              <div className="flex justify-between border-b py-2">
                <span className="text-muted-foreground">Best Route:</span>
                <span className="font-semibold">via GJ SH 7</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Starting Fare:</span>
                <span className="font-semibold text-primary">Contact for Best Quote</span>
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