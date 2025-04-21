import About from '@/components/About'
import BookCab from '@/components/BookCab'
import Cab from '@/components/Cab'
import CabRoutes from '@/components/CabRoutes'
import Cta from '@/components/Cta'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Packages from '@/components/Packages'
import Socials from '@/components/Socials'
import Testimonials from '@/components/Testimonials'
import React from 'react'


export const metadata = {
  title: "Shivay Safar | Best Cab Service in Gandhidham",
  description: "24/7 cab booking in Gandhidham with professional drivers. Book your safe and comfortable ride now!",
  keywords: "cab service Gandhidham, taxi Gandhidham, book cab Gandhidham, shivay safar",
};
export default function page() {
  return (
    <>
      <Hero />
      <About />
      <BookCab />
      <Cab />
      <CabRoutes />
      <Features />
      <Packages />
      <Cta />
      {/* <HowItWorks />
      <Testimonials /> */}
      <Socials />
    </>
  )
}