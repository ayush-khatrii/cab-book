"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaHeart,
  FaCode,
} from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import Link from "next/link";
import { Badge } from "./ui/badge";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/shivay_safar_9/",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/+917984986324",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Booking", href: "/#booking" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [{ name: "Terms of Service", href: "/terms-conditions" }];

  return (
    <footer className="bg-white dark:bg-black mt-40 relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform translate-y-[-98%]">
        <svg
          className="relative w-full h-12 md:h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="hidden md:block fill-white dark:fill-black"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto pt-20 pb-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
                Shivay Safar
              </h3>
              <div className="h-1 w-16 bg-primary rounded-full"></div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Safe, comfortable, and reliable city-to-city cab services with a
              premium experience
            </p>

            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/20 hover:bg-primary text-black dark:text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label={`Social link ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="bg-primary/20 dark:bg-primary/30 p-2 rounded-md mt-1 group-hover:bg-primary dark:group-hover:bg-primary transition-colors duration-300">
                  <FaLocationDot className="h-4 w-4 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  DBZ-N.107 Khanna market near gandhidham typing, Gandhidham
                  Kutch
                </span>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-primary/20 dark:bg-primary/30 p-2 rounded-md mt-1 group-hover:bg-primary dark:group-hover:bg-primary transition-colors duration-300">
                  <IoMdCall className="h-4 w-4 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  +91 79849 86324, +91 9913504244
                </span>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-primary/20 dark:bg-primary/30 p-2 rounded-md mt-1 group-hover:bg-primary dark:group-hover:bg-primary transition-colors duration-300">
                  <MdMail className="h-4 w-4 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">shivaysafar@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Routes Section */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-black dark:text-white">Routes</h4>
              <div className="h-1 w-16 bg-primary/60 rounded-full"></div>
            </div>
            <ul className="space-y-3">
              {[
                {
                  name: "Gandhidham to Ahmedabad",
                  href: "/routes/gandhidham-to-ahmedabad",
                },
              ].map((route) => (
                <li
                  key={route.name}
                  className="transform hover:translate-x-2 transition-transform duration-300"
                >
                  <Link
                    href={route.href}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
                  >
                    <span>&raquo;</span>
                    <span>{route.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-black dark:text-white">Contact Us</h4>
              <div className="h-1 w-16 bg-primary/60 rounded-full"></div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="bg-primary/20 dark:bg-primary/30 p-2 rounded-md mt-1 group-hover:bg-primary dark:group-hover:bg-primary transition-colors duration-300">
                  <FaLocationDot className="h-4 w-4 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  DBZ-N.107 Khanna market near gandhidham typing, Gandhidham
                  Kutch
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-primary/20 dark:bg-primary/30 p-2 rounded-md mt-1 group-hover:bg-primary dark:group-hover:bg-primary transition-colors duration-300">
                  <IoMdCall className="h-4 w-4 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  +91 79849 86324, +91 9913504244
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-primary/20 dark:bg-primary/30 p-2 rounded-md mt-1 group-hover:bg-primary dark:group-hover:bg-primary transition-colors duration-300">
                  <MdMail className="h-4 w-4 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">shivaysafar@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-black dark:text-white">Quick Links</h4>
              <div className="h-1 w-16 bg-primary/60 rounded-full"></div>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li
                  key={link.name}
                  className="transform hover:translate-x-2 transition-transform duration-300"
                >
                  <Link
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
                  >
                    <span>&raquo;</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-black dark:text-white">Legal</h4>
              <div className="h-1 w-16 bg-primary/60 rounded-full"></div>
            </div>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li
                  key={link.name}
                  className="transform text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:translate-x-2 transition-all duration-300"
                >
                  <Link
                    href={link.href}
                    className="flex items-center space-x-2"
                  >
                    <span>&raquo;</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-center">
          <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Shivay Safar. All Rights Reserved.
          </p>

          <div className="mt-4 md:mt-0 text-sm">
            <a
              href="https://ayushkhatri.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 justify-center group text-gray-600 dark:text-gray-400 text-sm hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <span>Developed by</span>
              <Badge className="flex text-xs justify-end px-3 py-1 rounded-full transition-all duration-300">
                AK
              </Badge>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;