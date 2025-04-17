import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaHeart,
  FaCode
} from 'react-icons/fa';
import { RiMapPin2Fill } from 'react-icons/ri';
import { IoMdCall } from "react-icons/io";
import { MdMail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

import Link from 'next/link';
import { Badge } from './ui/badge';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/shivay_safar_9/',
    },
    {
      icon: <FaWhatsapp />,
      href: 'https://wa.me/+917984986324',
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Booking', href: '/#booking' },
    { name: 'Contact', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cancellation Policy', href: '/cancellation' },
    { name: 'Refund Policy', href: '/refund' }
  ];

  return (
    <footer className="bg-foreground mt-40 text-background relative">

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform translate-y-[-98%]">
        <svg className="relative w-full h-12 md:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="hidden md:block fill-foreground"></path>
        </svg>
      </div>

      <div className="container mx-auto pt-20 pb-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-primary">Shivay Safar</h3>
              <div className="h-1 w-16 bg-primary rounded-full"></div>
            </div>
            <p className="text-accent/90 leading-relaxed">
              Your trusted travel partner for safe and comfortable rides across cities. We provide premium transportation services with exceptional customer experience.
            </p>

            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/20 hover:bg-primary text-primary hover:text-background p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label={`Social link ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2">Contact Us</h4>
              <div className="h-1 w-16 bg-primary/60 rounded-full"></div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="bg-primary/20 p-2 rounded-md mt-1 group-hover:bg-primary transition-colors duration-300">
                  <FaLocationDot className="h-4 w-4 text-primary group-hover:text-background transition-colors duration-300" />
                </div>
                <span className="text-accent/90">DBZ-N.107 Khanna market near gandhidham typing, Gandhidham Kutch</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-primary/20 p-2 rounded-md mt-1 group-hover:bg-primary transition-colors duration-300">
                  <IoMdCall className="h-4 w-4 text-primary group-hover:text-background transition-colors duration-300" />
                </div>
                <span className="text-accent/90">+91 79849 86324</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-primary/20 p-2 rounded-md mt-1 group-hover:bg-primary transition-colors duration-300">
                  <MdMail className="h-4 w-4 text-primary group-hover:text-background transition-colors duration-300" />
                </div>
                <span className="text-accent/90">shivaysafar99@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
              <div className="h-1 w-16 bg-primary/60 rounded-full"></div>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name} className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link href={link.href} className="flex items-center space-x-2 text-accent/90 hover:text-primary">
                    <span className="text-primary">&raquo;</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2">Legal</h4>
              <div className="h-1 w-16 bg-primary/60 rounded-full"></div>
            </div>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name} className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link href={link.href} className="flex items-center space-x-2 text-accent/90 hover:text-primary">
                    <span className="text-primary">&raquo;</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-accent/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-center">
          <p className="text-accent/70 text-center md:text-left">
            © {new Date().getFullYear()} Shivay Safar. All Rights Reserved.
          </p>

          <div className="mt-4 md:mt-0 text-sm">
            <a
              href="https://ayushkhatri.site"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center flex-col space-x-2 group"
            >
              <span className="text-accent/70 mt-5 mb-2 text-sm group-hover:text-primary transition-colors duration-300">
                Designed & Developed by
              </span>
              <Badge className="flex text-sm items-center bg-primary/10 group-hover:bg-primary px-3 py-1 rounded-full transition-all duration-300">
                <FaCode className="text-primary group-hover:text-background mr-1.5 transition-colors duration-300" />
                <span className="font-semibold text-primary group-hover:text-background transition-colors duration-300">
                  Ayush Khatri
                </span>
                <FaHeart className="mx-2 text-primary h-3 w-3 group-hover:scale-125  group-hover:text-accent shadow-accent transition-transform duration-300" />
              </Badge>
            </a>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;