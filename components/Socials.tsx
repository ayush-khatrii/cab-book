'use client'
import { motion } from "motion/react"
import { Phone, Mail, Instagram } from "lucide-react"
import Link from "next/link"
import { FaInstagram } from "react-icons/fa";

const Socials = () => {

  return (
    <section className="py-16 px-4 md:py-24 ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Phone Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col items-center p-5 rounded-2xl shadow-lg transition-all duration-300 border border-primary"

          >
            <div className="mb-4 p-5 rounded-xl transition-colors duration-300">
              <Phone size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <Link href="tel:+919876543210"
              className="text-primary hover:text-primary/70 transition-colors duration-300">
              +91 79849 86324
            </Link>
          </motion.div>

          {/* Email Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center p-5 rounded-2xl shadow-lg transition-all duration-300 border border-primary"

          >
            <div className="mb-4 p-5 rounded-xl transition-colors duration-300">
              <Mail size={20} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <Link href="mailto:shivaysafar@gmail.com"
              className="text-primary hover:text-primary/70 transition-colors duration-300">
              shivaysafar@gmail.com
            </Link>
          </motion.div>

          {/* Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center p-5 rounded-2xl shadow-lg transition-all duration-300 border border-primary"
          >
            <div className="mb-4 p-5 rounded-xl transition-colors duration-300">
              <FaInstagram size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <Link href="https://www.instagram.com/shivay_safar_9/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors duration-300">
              @shivaysafar
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Socials