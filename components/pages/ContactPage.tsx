"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { IoIosSend } from 'react-icons/io';
import { IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form processing
    setTimeout(() => {
      window.open(
        `https://wa.me/+917984986324?text=${encodeURIComponent(
          `Name: ${formData.name}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
        )}`
      );

      // Reset form and show success state
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', subject: '', message: '' });
      setIsLoading(false);

      // Hide success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 500);
  };

  const contactInfo = [
    {
      icon: IoCallOutline,
      label: 'Phone',
      value: '+91 79849 86324',
      href: 'tel:+917984986324',
    },
    {
      icon: IoMailOutline,
      label: 'Email',
      value: 'shivaysafar@gmail.com',
      href: 'mailto:shivaysafar@gmail.com',
    },
    {
      icon: IoLocationOutline,
      label: 'Location',
      value: 'Gandhidham, Kutch',
      href: 'https://maps.google.com',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="min-h-screen bg-background py-12 md:py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 dark:bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-secondary/5 dark:bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="mb-16 md:mb-20 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            We're Here to <span className="text-primary">Help You</span>
          </h1>
          <p className="text-lg text-muted-foreground mx-auto max-w-2xl leading-relaxed">
            Have questions about our cab services? Need to make a special booking? Our dedicated team is ready to assist you with all your transportation needs.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Contact Form Section */}
          <motion.div
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="bg-card border border-border rounded-2xl shadow-sm p-8 h-fit hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Send us a Message</h2>
                <p className="text-muted-foreground">We'll get back to you as soon as possible</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Full Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary rounded-lg transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Phone Number *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 99999 99999"
                      required
                      className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary rounded-lg transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Subject (Optional)</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary rounded-lg transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your request..."
                    required
                    className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary rounded-lg min-h-40 resize-none transition-colors"
                  />
                </div>

                {/* Success Message */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: isSubmitted ? 1 : 0,
                    height: isSubmitted ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-primary">Message sent successfully!</p>
                      <p className="text-xs text-muted-foreground">We'll contact you shortly via WhatsApp</p>
                    </div>
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className='w-full font-medium h-11 rounded-lg gap-2'
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <IoIosSend />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group block"
                >
                  <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 p-2.5 mb-4 group-hover:scale-110 transition-transform flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2">{info.label}</h3>
                    <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Map Card */}
            <motion.div
              variants={itemVariants}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-full h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.7301265357637!2d70.1380366745416!3d23.070353614544853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x83e6e55bab176cd7%3A0x5f246b94b21e86f9!2sSHIVAY%20SAFAR!5e0!3m2!1sen!2sin!4v1758131261959!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          className="mt-16 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
        </motion.div>
      </div>
    </section>
  );
}