'use client'

import React from 'react'
import { motion } from "framer-motion"
import { Phone, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

// Custom Instagram Gradient Component for that "Original Color" look
const InstagramIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ig-grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 12) rotate(90) scale(12)">
        <stop offset="0" stopColor="#f09433" />
        <stop offset="0.25" stopColor="#e6683c" />
        <stop offset="0.5" stopColor="#dc2743" />
        <stop offset="0.75" stopColor="#cc2366" />
        <stop offset="1" stopColor="#bc1888" />
      </radialGradient>
    </defs>
    <path
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.669-.072-4.948-.2-4.358-2.621-6.78-6.979-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      fill="url(#ig-grad)"
    />
  </svg>
)

const contactData = [
  {
    title: "Call Us",
    value: "+91 79849 86324",
    href: "tel:+917984986324",
    icon: <Phone size={32} className="text-[#25D366]" />, // WhatsApp Green
    bg: "bg-[#25D366]/10",
    label: "Direct Line",
    hover: "group-hover:bg-[#25D366]",
    delay: 0.1
  },
  {
    title: "Email Us",
    value: "shivaysafar@gmail.com",
    href: "mailto:shivaysafar@gmail.com",
    icon: <Mail size={32} className="text-[#EA4335]" />, // Google Red
    bg: "bg-[#EA4335]/10",
    label: "24/7 Support",
    hover: "group-hover:bg-[#EA4335]",
    delay: 0.2
  },
  {
    title: "Follow Us",
    value: "@shivay_safar_9",
    href: "https://www.instagram.com/shivay_safar_9/",
    icon: <InstagramIcon />,
    bg: "bg-gradient-to-tr from-[#f09433]/10 via-[#dc2743]/10 to-[#bc1888]/10",
    label: "Social Updates",
    hover: "group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#dc2743] group-hover:to-[#bc1888]",
    delay: 0.3
  }
]

const Socials = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-2">
            Get in <span className="text-2xl md:text-4xl text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-xl mx-auto">
            Book your next journey with Shivay Safar. We are available across all platforms for your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
            >
              <Link href={item.href} target={item.href.startsWith('http') ? "_blank" : undefined} rel="noopener noreferrer">
                <Card className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-card overflow-hidden">
                  <CardContent className="p-10 flex flex-col items-center text-center">

                    {/* Brand Colored Icon Container */}
                    <div className={`mb-8 h-20 w-20 rounded-3xl ${item.bg} flex items-center justify-center ${item.hover} transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110 shadow-inner`}>
                      <div className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-500">
                        {item.icon}
                      </div>
                    </div>

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                      {item.label}
                    </p>
                    <h3 className="text-2xl font-extrabold mb-4 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground font-semibold break-all">
                      {item.value}
                    </p>

                    <div className="mt-8 pt-6 border-t w-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                        OPEN LINK <ExternalLink size={14} />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Socials