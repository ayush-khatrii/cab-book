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

export const metadata = {
  title: "Contact Shivay Safar | Book a Cab or Get Support",
  description: "Get in touch with Shivay Safar for cab bookings, support, or general inquiries. Call us or fill the contact form.",
  keywords: "contact shivay safar, cab booking phone, gandhidham taxi contact, shivay safar",
};

export default function Contact() {
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
    window.open(`https://wa.me/+917984986324?text=${encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`)}`);
    console.log(formData);
  };

  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent-foreground">Get in Touch</h1>
        <p className="text-muted-foreground mx-auto max-w-2xl">Have questions about our cab services? Need to make a special booking? Our team is here to help you with all your transportation needs.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div
          className="rounded-lg shadow-md p-6 border h-fit  bg-accent"
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
                  required
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
          <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-4 mt-5">
            <div className="flex items-center space-x-2 w-full">
              <div className="rounded-full p-2 bg-primary/10">
                <IoCallOutline className="h-6 w-6 text-primary" />
              </div>
              <a href="tel:+917984986324" className="text-primary">+91 79849 86324</a>
            </div>

            <div className="flex items-center space-x-2 w-full">
              <div className="rounded-full p-2 bg-primary/10">
                <IoMailOutline className="h-6 w-6 text-primary" />
              </div>
              {/* <h3 className="font-medium mb-1">Email</h3> */}
              <a href="mailto:shivaysafar99@gmail.com" className="text-primary">
                shivaysafar99@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col space-y-6"
        >
          <Card className="overflow-hidden shadow-md h-full">
            <CardContent className="p-0 h-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.6904804117426!2d70.1354349750933!3d23.071806479139358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950b98eea5ad791%3A0x269cf4e73036ec47!2s400%20Quarter%20Vegetable%20Market!5e0!3m2!1sen!2sin!4v1744616698373!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy">
              </iframe>

            </CardContent>
          </Card>

          {/* Contact Info Cards */}

        </div>
      </div>
    </section>
  );
};