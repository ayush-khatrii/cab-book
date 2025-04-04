import { Car, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const features = [
  {
    id: 1,
    icon: <Car className="h-8 w-8 text-primary" />,
    title: "Premium Vehicles",
    description: "Experience luxury and comfort with our carefully curated fleet of premium vehicles.",
  },
  {
    id: 2,
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Anywhere, Anytime",
    description: "Available 24/7 with extensive coverage across all major cities and destinations.",
  },
  {
    id: 3,
    icon: <Phone className="h-8 w-8 text-primary" />,
    title: "Instant Booking",
    description: "Quick and hassle-free booking process with instant confirmation and support.",
  },
];

const Features = () => {
  return (
    <section className="px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="p-5 text-center cursor-pointer duration-300 bg-card/50 border border-primary/20"
            >
              <CardHeader>
                <div className="flex justify-center">
                  <div className="p-4 my-3 rounded-full bg-primary/10">{feature.icon}</div>
                </div>
                <CardTitle>
                  <h1 className="text-lg font-semibold">
                    {feature.title}
                  </h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-accent-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
