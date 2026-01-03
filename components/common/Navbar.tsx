"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { CustomButton } from "../reuseable/CustomButton";
import Link from "next/link";
import MenuIcon from "../icons/MenuIcon";

const NAV_LINKS = [
  { name: "Value proposition", href: "#" },
  { name: "How it works", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Testimonials", href: "#" },
  { name: "FAQs", href: "#" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Disable scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="border-b border-b-[#E2E8F0] border-solid relative bg-[#f4f4f5]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/">Logo</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-[50.5px]">
            <div className="flex items-center gap-6 lg:gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-black tracking-[-0.5px] hover:text-gray-700 transition-colors duration-200 whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4 ml-4">
              <CustomButton className="h-[47px]" variant="primary">
                Log In
              </CustomButton>
              <CustomButton className="h-[47px]" variant="outline">
                Sign Up
              </CustomButton>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="cursor-pointer">
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/*  Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-[320px] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-5 flex items-center justify-between border-b border-gray-200">
          <p className="text-lg font-semibold">Menu</p>
          <button onClick={() => setIsOpen(false)} className="cursor-pointer">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-5 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Buttons */}
          <div className="pt-4 flex flex-col gap-3">
            <CustomButton className="md:h-[47px] h-[40px] w-full" variant="primary">
              Log In
            </CustomButton>
            <CustomButton className="md:h-[47px] h-[40px] w-full" variant="outline">
              Sign Up
            </CustomButton>
          </div>
        </div>
      </div>
    </nav>
  );
};
