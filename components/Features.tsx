"use client"
import { Clock, PhoneCall, Shield, User } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'


const Features = () => {
  return (
    <div className="bg-card/50 border-t border-b border-border/50 py-12 mt-12" >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Our Premium Cab Service</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Experience the perfect blend of comfort, reliability and luxury with our premium transportation service</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Shield className="h-8 w-8 text-primary" />,
              title: "Safe & Secure",
              description: "All our vehicles undergo regular safety checks. Your security is our priority."
            },
            {
              icon: <User className="h-8 w-8 text-primary" />,
              title: "Professional Drivers",
              description: "Experienced and professional chauffeurs trained for exceptional customer service."
            },
            {
              icon: <Clock className="h-8 w-8 text-primary" />,
              title: "Punctual Service",
              description: "We value your time. Our drivers arrive 10 minutes before the scheduled pickup."
            },
            {
              icon: <PhoneCall className="h-8 w-8 text-primary" />,
              title: "24/7 Support",
              description: "Our customer service team is available round the clock for any assistance."
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .1, delay: idx * 0.1 }}
              className="p-6 border border-primary rounded-xl flex flex-col items-center text-center hover:shadow-md transition-all duration-300"
            >
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </ div>
  )
}

export default Features