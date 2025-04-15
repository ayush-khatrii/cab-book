import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp
} from 'react-icons/fa';
import { RiMapPin2Fill } from 'react-icons/ri';
import { IoMdCall } from "react-icons/io";
import { MdMail } from 'react-icons/md';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: 'https://facebook.com/shivaysafar',
    },
    {
      icon: <FaInstagram />,
      href: 'https://instagram.com/shivaysafar',
    },
    {
      icon: <FaWhatsapp />,
      href: 'https://wa.me/+919999999999',
    }
  ];

  const quickLinks = [
    'Home', 'About Us', 'Services', 'Booking', 'Contact'
  ];

  const legalLinks = [
    'Terms of Service', 'Privacy Policy', 'Cancellation Policy', 'Refund Policy'
  ];

  return (
    <footer className="bg-foreground from-primary to-primary text-background py-16">
      <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-4">Shivay Safar</h3>
          <p className="leading-relaxed text-accent/90 font-light">
            Your trusted travel partner for safe and comfortable rides across cities.
          </p>

          {/* Contact Info */}
          <div className="space-y-2 font-light">
            <div className="flex items-center space-x-3">
              <RiMapPin2Fill className="h-5 w-5 text-primary" />
              <span className=''>DBZ-N.107 Khanna market near gandhidham typing, Gandhidham Kutch </span>
            </div>
            <div className="flex items-center space-x-3">
              <IoMdCall className="h-5 w-5 text-primary" />
              <span>+91 79849 86324</span>
            </div>
            <div className="flex items-center space-x-3">
              <MdMail className="h-5 w-5 text-primary" />
              <span>shivaysafar99@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 font-light">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-accent/50 hover:underline transition duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 font-light">
            {legalLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-accent/50 hover:underline transition duration-300 hover:translate-x-1"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-accent/10 container mx-auto flex items-center flex-col md:flex-row justify-between mt-10 pt-6 text-center">
        <p className="text-accent/50">
          © {new Date().getFullYear()} Shivay Safar. All Rights Reserved.
        </p>
        <p className="text-accent/50 font-light">
          <a href='https://ayushkhatri.site' target="_blank" rel="noopener noreferrer" className='font-semibold text-primary'>

          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer; 