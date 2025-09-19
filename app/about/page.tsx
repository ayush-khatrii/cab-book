import { Mail, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";


export const metadata = {
  title: "About Shivay Safar | Trusted Cab Service in Gandhidham",
  description: "Learn more about Shivay Safar — offering reliable, comfortable, and 24/7 cab services across Gandhidham and Gujarat.",
  keywords: "about shivay safar, trusted cab service, gandhidham taxi, shivay safar company",
};


const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <div className="bg-primary relative flex justify-center items-center h-60">
          <div className="container relative z-10 mx-auto flex flex-col items-center text-center justify-center h-full px-4">
            <h1
              className="text-4xl  md:text-5xl lg:text-6xl font-bold"
            >
              Discover Our Story
            </h1>
            <p
              className="text-base  /80 md:text-lg mt-4 max-w-2xl">
              At Shivay Safar, we transform ordinary trips into extraordinary journeys.
            </p>
          </div>
        </div>

        <div className="pt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl font-bold text-center mb-8 text-foreground">About Shivay Safar</h2>
              <div className="prose mb-10">
                <p
                  className="mb-4">
                  At Shivay Safar, we believe that every journey has the power to transform lives. Founded with a passion for creating meaningful travel experiences, we're not just another travel company—we're your companions in discovery.
                </p>
                <p className="mb-4">
                  Our team of seasoned explorers curates journeys that balance adventure with comfort, authenticity with convenience. Whether you're seeking the thrill of unexplored trails or the serenity of perfect retreats, we craft each itinerary with meticulous attention to detail.
                </p>
                <h3
                  className="text-xl font-semibold text-foreground mt-8 mb-4">Our Approach</h3>
                <p className="mb-4">
                  We listen first. Your travel dreams and preferences shape every recommendation we make. Our expertise simply brings those dreams to life in ways you might not have imagined possible.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-6 md:text-center text-foreground">Contact Us</h3>
              <div className="flex flex-col md:flex-row justify-center items-start space-y-4 md:space-y-0 md:space-x-12 text-primary">
                <div className="flex items-center ease-in-out hover:underline transitiona-all duration-300 hover:-translate-y-2.5">
                  <Mail className="size-5 mr-2" />
                  <a href="mailto:shivaysafar99@gmail">shivaysafar@gmail.com</a>
                </div>

                <div className="flex items-center ease-in-out hover:underline transitiona-all duration-300 hover:-translate-y-2.5">
                  <Phone className="size-5 mr-2" />
                  <a href="tel:+919876543210">+91 79849 86324</a>
                </div>

                <div className="flex items-center ease-in-out hover:underline transitiona-all duration-300 hover:-translate-y-2.5">
                  <FaInstagram className="size-5 mr-2" />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
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