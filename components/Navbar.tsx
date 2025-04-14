"use client";

import { useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { navLinks } from "@/constants";

export default function Navbar() {
  return (
    <nav className="bg-background border-b sticky top-0 z-[200]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 relative">
          <Link href="/" className="flex items-center">
            <div className="w-32 h-32 absolute -top-[33px]">
              <img src="/shivay-safar-logo.png" alt="logo-image" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {
              navLinks.map((link, idx) => (
                <Link href={link.path} key={idx} className="text-foreground/80 text-sm font-medium hover:text-foreground transition-colors">
                  {link.name}
                </Link>
              ))
            }
            <Button variant="default">Book Now</Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="">
                <SheetHeader className="relative">
                  <SheetTitle></SheetTitle>
                  <Link href="/" className="size-24 absolute -top-4 left-2">
                    <img src="/shivay-safar-logo.png" alt="logo-image" className="w-full h-full" />
                  </Link>
                  <SheetDescription>
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col mt-3 gap-5 p-4 border-t">
                  {
                    navLinks.map((link, idx) => (
                      <Link href={link.path} key={idx} className="text-foreground/90 font-medium hover:text-foreground/65 text-sm transition-all duration-150 ease-in-out">
                        {link.name}
                      </Link>
                    ))
                  }
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button>Book Now</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}