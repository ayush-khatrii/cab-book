import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, MapPin, Star, Shield, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const trust = [
  { icon: Shield, text: "Verified Drivers" },
  { icon: Clock, text: "On-Time Guarantee" },
  { icon: Star, text: "Premium Comfort" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] bg-background overflow-hidden flex items-center">

      {/* ── Atmosphere ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">

        {/* Diagonal slab */}
        <div className="absolute top-0 right-0 w-[58%] h-full bg-primary/[0.04] [clip-path:polygon(12%_0,100%_0,100%_100%,0%_100%)]" />

        {/* Diagonal accent line */}
        <div className="absolute top-0 right-[42%] w-px h-full bg-border/50 [transform:skewX(-8deg)]" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--foreground)/0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 44%, transparent 52%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 44%, transparent 52%)",
          }}
        />

        {/* Left vignette */}
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_68%_88%_at_18%_50%,transparent_36%,black_100%)]" />

        {/* Right ambient glow — replaces hard shapes */}
        <div className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.08] blur-[80px]" />

        {/* Ground glow under car */}
        <div className="absolute bottom-[10%] right-[10%] w-[440px] h-20 rounded-full bg-primary/[0.14] blur-[48px]" />
      </div>

      {/* ── Grid ── */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 xl:px-12 grid xl:grid-cols-2 gap-0 items-center min-h-[92vh]">

        {/* LEFT */}
        <div className="flex flex-col justify-center py-20 xl:py-0 xl:pr-16">

          <div className="flex md:flex-row flex-col items-center gap-3 mb-7">
            <Badge
              variant="outline"
              className="rounded-full px-3 py-1 text-xs font-medium tracking-widest uppercase border-primary/40 text-primary bg-primary/5"
            >
              Gandhidham&apos;s Premium Cab
            </Badge>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin size={11} className="text-primary" />
              Serving all Gujarat
            </span>
          </div>

          <h1 className="font-bold text-foreground leading-[1.08] tracking-tight mb-6">
            <span className="block text-[clamp(2.6rem,5.5vw,4.5rem)]">
              Drive the City
            </span>
            <span className="block text-[clamp(2.6rem,5.5vw,4.5rem)] text-primary">
              in Style.
            </span>
            <span className="block text-[clamp(1.05rem,1.8vw,1.35rem)] font-normal text-muted-foreground mt-3 max-w-sm leading-relaxed">
              Comfort, reliability, and pride in every mile —{" "}
              <br className="hidden md:block" />
              wherever Gandhidham takes you.
            </span>
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {trust.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
              >
                <Icon size={12} className="text-primary" />
                {text}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              asChild
              className="rounded-full px-7 font-semibold shadow-none group"
            >
              <Link href="/#booking" className="flex items-center gap-2">
                Book Your Ride
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-150"
                />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              asChild
              className="rounded-full px-7 font-medium text-muted-foreground hover:text-foreground"
            >
              <Link href="/#fleet">View Our Fleet</Link>
            </Button>
          </div>
        </div>

        {/* RIGHT — car showcase */}
        <div className="relative hidden xl:flex items-end justify-center h-full min-h-[92vh] pb-14">

          {/* Pick-up card — upper left */}
          <div className="absolute top-[18%] left-2 z-20 rounded-2xl border border-border/70 bg-card/90 backdrop-blur-md px-4 py-3 shadow-sm">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
              Pick-up ready in
            </p>
            <p className="text-xl font-bold text-foreground leading-none tabular-nums">
              3 mins
            </p>
          </div>

          {/* Driver rating — lower right */}
          <div className="absolute bottom-[22%] right-2 z-20 rounded-2xl border border-border/70 bg-card/90 backdrop-blur-md px-4 py-3 shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Star size={13} className="fill-primary text-primary" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-none mb-1">
                  Driver rating
                </p>
                <p className="text-base font-bold text-foreground leading-none tabular-nums">
                  4.95 / 5.0
                </p>
              </div>
            </div>
          </div>

          {/* Route pill — centred, just above ticker */}
          <div className="absolute bottom-[13%] left-1/2 -translate-x-1/2 z-20 rounded-full border border-border/70 bg-card/90 backdrop-blur-md px-5 py-2.5 flex items-center gap-2.5 shadow-sm whitespace-nowrap">
            <span className="h-2 w-2 rounded-full bg-primary block shrink-0" />
            <span className="text-xs text-muted-foreground">Gimb</span>
            <span className="text-muted-foreground/30 text-xs">→</span>
            <span className="text-xs text-foreground font-semibold">Ahmedabad Airport</span>
          </div>

          {/* Car */}
          <div className="relative z-10 w-full -mb-4">
            {/* Ground reflection */}
            <div
              aria-hidden
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-10 rounded-full bg-primary/25 blur-2xl"
            />
            <Image
              src="/xl6.png"
              alt="Shivay Safar — Maruti XL6 premium cab"
              width={960}
              height={640}
              priority
              className="w-full max-w-[960px] h-auto object-contain relative z-10"
              style={{
                filter:
                  "drop-shadow(0 36px 56px hsl(var(--primary)/0.2)) drop-shadow(0 6px 18px rgba(0,0,0,0.55))",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Ticker ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-border bg-card/60 backdrop-blur-sm py-2.5 overflow-hidden hidden md:block">
        <div className="flex items-center gap-0 animate-marquee whitespace-nowrap">
          {Array.from({ length: 3 }).flatMap((_, i) =>
            [
              "📍 Gandhidham → Surat",
              "✈️ Airport Transfers",
              "🏨 Outstation Cabs",
              "🕐 24 / 7 Service",
              "💼 Corporate Rides",
              "🌟 5-Star Comfort",
            ].map((item) => (
              <span
                key={`${i}-${item}`}
                className="inline-flex items-center gap-8 px-8 text-xs text-muted-foreground"
              >
                {item}
                <span className="text-border">|</span>
              </span>
            ))
          )}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}