"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { IoIosSend } from 'react-icons/io';
import { IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent-foreground">Get in Touch</h1>
        <p className="text-muted-foreground mx-auto max-w-2xl">Have questions about our cab services? Need to make a special booking? Our team is here to help you with all your transportation needs.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg shadow-md p-6 border h-fit"
        >
          <h2 className="text-xl font-bold mb-6 text-accent-foreground">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="space-y-2">
                <label className="text-sm font-medium text-accent-foreground">Full Name</label>
                <Input
                  type="text"
                  name="name"
                  className='mt-1'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-accent-foreground">Phone Number</label>
                <Input
                  type="tel"
                  className='mt-1'
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 99999 99999"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-accent-foreground">Your Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className='mt-1 min-h-32'
                  placeholder="Type your message here..."
                  required
                />
              </div>
            </div>
            <Button
              className='w-full font-medium'
              type="submit">
              Send Message <IoIosSend className='ml-2' />
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col space-y-6"
        >
          {/* Map Card */}
          <Card className="overflow-hidden shadow-md h-[350px]">
            <CardContent className="p-0 h-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.6904804117426!2d70.1354349750933!3d23.071806479139358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950b98eea5ad791%3A0x269cf4e73036ec47!2s400%20Quarter%20Vegetable%20Market!5e0!3m2!1sen!2sin!4v1744616698373!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy">
              </iframe>

            </CardContent>
          </Card>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-4">
            <Card className="shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="flex flex-col items-center p-4 text-center">
                <div className="rounded-full bg-primary/10 p-3 mb-3">
                  <IoCallOutline className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-1">Phone</h3>
                <a href="tel:+919999999999" className="text-primary">+91 9999 999 999</a>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="flex flex-col items-center p-4 text-center">
                <div className="rounded-full bg-primary/10 p-3 mb-3">
                  <IoMailOutline className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-1">Email</h3>
                <a href="mailto:info@cabservice.com" className="text-primary">info@cabservice.com</a>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;