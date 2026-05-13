import dynamic from 'next/dynamic'
const Hero = dynamic(() => import('@/components/Hero'))
const About = dynamic(() => import('@/components/About'))
const BookCab = dynamic(() => import('@/components/BookCab'))
const Cab = dynamic(() => import('@/components/Cab'))
const CabRoutes = dynamic(() => import('@/components/CabRoutes'))
const Features = dynamic(() => import('@/components/Features'))
const Packages = dynamic(() => import('@/components/Packages'))
const Cta = dynamic(() => import('@/components/Cta'))
const Socials = dynamic(() => import('@/components/Socials'))

export const metadata = {
  title: "Shivay Safar | Best Cab Service in Gandhidham",
  description: "24/7 cab booking in Gandhidham with professional drivers. Book your safe and comfortable ride now!",
  keywords: "cab service Gandhidham, taxi Gandhidham, book cab Gandhidham, shivay safar",
};
export default function page() {
  return (
    <main>
      <Hero />
      <About />
      <BookCab />
      <Cab />
      <CabRoutes />
      <Features />
      <Packages />
      <Cta />
      <Socials />
    </main>
  )
}