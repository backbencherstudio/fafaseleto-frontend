import React from "react";
import GmailIcon from "../icons/GmailIcon";
import InstagramIcon from "../icons/InstagramIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import Link from "next/link";
import ShopingIcon from "../icons/ShopingIcon";

const navItems = [
  { name: "Home", href: "/" },
  { name: "How it Works", href: "/how-it-works" },
  { name: "Pricing", href: "/pricing" },
  { name: "Why Postulae?", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] px-5 md:px-20 pt-15 md:pt-12.5 pb-4 mt-20">
      <div className="max-w-[1278px] mx-auto flex justify-between flex-col md:flex-row gap-10 md:gap-0">
        {/* left */}
        <div className="max-w-[358px] ">
          <div className="w-12 h-12 ]  mb-3"></div>
          <p className="text-[rgba(255,255,255,0.80)] [font-family:Inter] text-base font-normal leading-[26px] mb-4">
            Postulae vous aide à décrocher un entretien avec un CV à la hauteur
            de vos ambitions.
          </p>
          <div className="flex items-center gap-4">
            <div className="company-icon">
              <GmailIcon />
            </div>
            <div className="company-icon ">
              <InstagramIcon />
            </div>
            <div className="company-icon">
              <WhatsAppIcon />
            </div>
          </div>
        </div>

        {/* right */}
        <div className="max-w-[380px] flex justify-between gap-20">
          {/* quick links */}
          <div>
            <h5 className="text-white font-secondary text-lg font-medium leading-[normal] tracking-[-0.54px] uppercase mb-[27px]">
              QUICK LINKS
            </h5>

            <ul>
              {navItems.map((item) => (
                <li key={item.name} className="mb-3">
                  <Link
                    href={item.href}
                    className="text-[rgba(255,255,255,0.80)] [font-family:Inter] text-sm font-normal leading-[normal] tracking-[-0.42px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* contact email */}
          <div>
            <h5 className="text-white font-secondary text-lg font-medium leading-[normal] tracking-[-0.54px] uppercase mb-[27px]">
              CONTACT EMAIL
            </h5>
            <div className="flex items-center gap-2.5">
              <ShopingIcon />

              <p className="text-[rgba(255,255,255,0.80)] text-sm font-normal leading-[26px] tracking-[-0.42px]">
                contact@postulae.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
