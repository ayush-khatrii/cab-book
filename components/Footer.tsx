"use client";

import React from "react";
import { FaInstagram, FaWhatsapp, FaChevronRight } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { Badge } from "./ui/badge";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaInstagram className="w-5 h-5" />,
      href: "https://www.instagram.com/shivay_safar_9/",
      color: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888]",
      label: "Instagram",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/+917984986324",
      color: "hover:bg-[#25D366]",
      label: "WhatsApp",
    },
  ];

  const sections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Cab Packages", href: "/#packages" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Top Routes",
      links: [
        { name: "Gandhidham to Ahmedabad", href: "/routes/gandhidham-to-ahmedabad" },
        { name: "Gandhidham to Rajkot", href: "/routes/gandhidham-to-rajkot" },
        { name: "Bhuj to Ahmedabad", href: "/routes/bhuj-to-ahmedabad" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms & Conditions", href: "/terms-conditions" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-[#050505] border-t border-border mt-32 relative transition-colors duration-500">
      {/* Decorative Wave Top (Optional - keep if you like the SVG curve) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-full">
        <svg className="relative block w-full h-12 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-slate-50 dark:fill-[#050505]"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Info - 4 Columns Wide on Desktop */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-black tracking-tighter text-foreground">
                SHIVAY<span className="text-primary">SAFAR</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                Redefining travel across Gujarat with premium city-to-city cab services. Safe, reliable, and always on time.
              </p>
            </div>

            {/* Social Cluster */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`h-10 w-10 flex items-center justify-center rounded-xl bg-background border border-border shadow-sm transition-all duration-300 hover:scale-110 hover:text-white ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <IoMdCall className="text-primary group-hover:text-white h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Call Reservations</span>
                  <span className="font-semibold text-sm">+91 79849 86324</span>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <FaLocationDot className="text-primary group-hover:text-white h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Office</span>
                  <span className="text-sm font-medium">Gandhidham, Kutch, Gujarat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Link Sections - 8 Columns Wide on Desktop */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.title} className="space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/80">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-all duration-300 group text-sm font-medium"
                      >
                        <FaChevronRight className="h-2 w-2 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm font-medium">
            © {currentYear} Shivay Safar. Crafted for comfort.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://ayushkhatri.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-2 px-4 rounded-full bg-background border border-border hover:shadow-md transition-all group"
            >
              <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground">Developed by</span>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-bold group-hover:bg-primary group-hover:text-white transition-colors">
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