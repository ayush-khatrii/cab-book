// // import { Metadata } from "next";
// // import Link from "next/link";

// // export const metadata: Metadata = {
// //   title: "Gandhidham to Ahmedabad Cab | Shivay Safar",
// //   description:
// //     "Book a cab from Gandhidham to Ahmedabad with Shivay Safar. Reliable, sanitized, and affordable taxi service available 24/7.",
// //   keywords: [
// //     "Gandhidham to Ahmedabad taxi",
// //     "cab service Ahmedabad",
// //     "book cab Gandhidham Ahmedabad",
// //     "Shivay Safar Gandhidham",
// //     "taxi service from Gandhidham",
// //     "Ahmedabad cab booking"
// //   ],
// //   metadataBase: new URL("https://shivaysafar.com"),
// //   alternates: {
// //     canonical: "https://shivaysafar.com/routes/gandhidham-to-ahmedabad",
// //   },
// //   openGraph: {
// //     title: "Gandhidham to Ahmedabad Cab | Shivay Safar",
// //     description:
// //       "Travel from Gandhidham to Ahmedabad in comfort with Shivay Safar. Affordable, safe, and professional cab service 24/7.",
// //     url: "https://shivaysafar.com/routes/gandhidham-to-ahmedabad",
// //     siteName: "Shivay Safar",
// //     locale: "en_IN",
// //     type: "website",
// //     images: [
// //       {
// //         url: "/ahmedabad-route.jpg",
// //         width: 1200,
// //         height: 630,
// //         alt: "Cab from Gandhidham to Ahmedabad | Shivay Safar",
// //       },
// //     ],
// //   },
// //   twitter: {
// //     card: "summary_large_image",
// //     title: "Gandhidham to Ahmedabad Cab | Shivay Safar",
// //     description:
// //       "Safe & reliable cab service from Gandhidham to Ahmedabad. Shivay Safar offers 24/7 bookings with professional drivers.",
// //     images: [
// //       {
// //         url: "/ahmedabad-route.jpg",
// //         width: 1200,
// //         height: 630,
// //         alt: "Cab from Gandhidham to Ahmedabad | Shivay Safar",
// //       },
// //     ],
// //   },
// //   authors: [{ name: "Shivay Safar" }],
// //   creator: "Shivay Safar",
// //   publisher: "Shivay Safar",
// //   applicationName: "Shivay Safar Cabs",
// //   category: "Transportation",
// // };


// // export default function page() {
// //   return (
// //     <section className="w-full bg-gradient-to-br from-background via-[#f8f8f8] to-background py-20 px-4">
// //       <div className="max-w-5xl mx-auto text-center">
// //         <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
// //           Gandhidham to Ahmedabad Cab Service
// //         </h1>
// //         <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
// //           Travel comfortably from Gandhidham to Ahmedabad with our premium taxi service. Safe drivers, clean cars, and 24/7 availability — all at the best price.
// //         </p>

// //         <div className="flex justify-center mt-8">
// //           <Link
// //             href="/#booking"
// //             className="inline-block bg-primary hover:bg-primary/90 text-background font-semibold text-lg px-8 py-3 rounded-full shadow-md transition-all duration-300"
// //           >
// //             Book This Route
// //           </Link>
// //         </div>

// //         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
// //           <div className="bg-accent p-6 rounded-xl shadow hover:shadow-lg transition">
// //             <h3 className="text-xl font-bold text-primary mb-2">🚗 Comfortable Ride</h3>
// //             <p className="text-sm text-foreground/80">
// //               Spacious, air-conditioned cabs with regular sanitization for your peace of mind.
// //             </p>
// //           </div>

// //           <div className="bg-accent p-6 rounded-xl shadow hover:shadow-lg transition">
// //             <h3 className="text-xl font-bold text-primary mb-2">🕒 24/7 Availability</h3>
// //             <p className="text-sm text-foreground/80">
// //               Book anytime, day or night — we’re always ready to drive you safely.
// //             </p>
// //           </div>

// //           <div className="bg-accent p-6 rounded-xl shadow hover:shadow-lg transition">
// //             <h3 className="text-xl font-bold text-primary mb-2">💸 Affordable Pricing</h3>
// //             <p className="text-sm text-foreground/80">
// //               Transparent pricing with no hidden charges. Pay what you see.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }
// // app/routes/gandhidham-to-ahmedabad/page.tsx

// import Link from "next/link";
// import { FaCarSide, FaClock, FaRupeeSign, FaShieldAlt } from "react-icons/fa";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Gandhidham to Ahmedabad Taxi | Book Safe & Affordable Ride - Shivay Safar",
//   description:
//     "Travel from Gandhidham to Ahmedabad with Shivay Safar. Safe, affordable & comfortable taxi rides with professional drivers. Book your ride now!",
// };

// export default function page() {
//   return (
//     <section className="w-full bg-gradient-to-br text-foreground">
//       <div className="max-w-6xl mx-auto px-6 py-20">
//         {/* Hero */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-primary">
//             Gandhidham to Ahmedabad Taxi Service
//           </h1>
//           <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
//             Book a comfortable, safe and affordable cab with Shivay Safar — trusted by 1000+ happy riders across Gujarat.
//           </p>

//           <Link
//             href="/#booking"
//             className="mt-8 inline-block bg-primary hover:bg-primary/90 text-background text-lg font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
//           >
//             🚕 Book Your Ride Now
//           </Link>
//         </div>

//         {/* Highlights */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
//           <FeatureCard icon={<FaCarSide />} title="Premium Fleet" desc="AC Sedans, SUVs, and more. Clean & comfortable rides." />
//           <FeatureCard icon={<FaClock />} title="24/7 Availability" desc="Day or night, we’re ready for your journey." />
//           <FeatureCard icon={<FaRupeeSign />} title="Flat Pricing" desc="No surge, no hidden charges. Pay what you see." />
//           <FeatureCard icon={<FaShieldAlt />} title="Safe & Sanitized" desc="Verified drivers. Fully sanitized cabs. GPS enabled." />
//         </div>

//         {/* Trip Info Section */}
//         <div className="mt-20 bg-accent p-8 rounded-3xl shadow-xl">
//           <h2 className="text-2xl font-bold mb-4 text-primary">Trip Details</h2>
//           <ul className="text-foreground/80 text-md space-y-3">
//             <li>📍 <strong>Pickup:</strong> Gandhidham / nearby locations</li>
//             <li>🎯 <strong>Drop:</strong> Ahmedabad (any point within city)</li>
//             <li>🛣️ <strong>Distance:</strong> Approx. 300 km</li>
//             <li>⏱️ <strong>Travel Time:</strong> Around 5 to 6 hours</li>
//             <li>🧳 <strong>Cars Available:</strong> Sedan, SUV, Innova, Ertiga</li>
//           </ul>

//           <Link
//             href="/#booking"
//             className="mt-6 inline-block bg-primary hover:bg-primary/90 text-background font-medium px-6 py-3 rounded-full transition-all"
//           >
//             ✅ Check Availability & Book Now
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Reusable feature card
// function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
//   return (
//     <div className="bg-accent border p-6 rounded-xl shadow hover:shadow-lg transition">
//       <div className="text-3xl text-primary mb-4">{icon}</div>
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className="text-foreground/80 text-sm">{desc}</p>
//     </div>
//   );
// }
