import About from '@/components/About'
import BookCab from '@/components/BookCab'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <div className='bg-accent py-10'>
        <BookCab />
      </div>
      <HowItWorks />
      <About />
      <Testimonials />
      <Footer />
    </>
  )
}

export default page