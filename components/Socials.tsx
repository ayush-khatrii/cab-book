'use client'

import { motion } from "framer-motion"
import { Phone, Mail, Instagram } from "lucide-react"
import Link from "next/link"
import { FaInstagram } from "react-icons/fa";

const Socials = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section className="py-16 px-4 md:py-24 ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Phone Contact */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-200"
          >
            <div className="mb-4 p-5 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors duration-300">
              <Phone size={40} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <Link href="tel:+919876543210" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
              +91 9876 543 210
            </Link>
          </motion.div>

          {/* Email Contact */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-purple-200"
          >
            <div className="mb-4 p-5 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors duration-300">
              <Mail size={40} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <Link href="mailto:contact@taxiservice.com" className="text-purple-600 hover:text-purple-800 transition-colors duration-300">
              contact@taxiservice.com
            </Link>
          </motion.div>

          {/* Instagram */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-pink-200"
          >
            <div className="mb-4 p-5 rounded-xl transition-colors duration-300">
              <FaInstagram size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <Link href="https://instagram.com/taxiservice" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors duration-300">
              @taxiservice
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Socials