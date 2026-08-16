"use client";

import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = ["Services", "Solutions", "Virtual team", "Company", "About us"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-12">
          {/* <span className="text-2xl font-black tracking-tight text-white">S</span> */}
          <div className="leading-tight">
            {/* <p className="text-lg font-extrabold tracking-wide text-white">
              iNTER <span className="text-white">SMART</span>
            </p>
            <p className="text-[10px] tracking-[0.2em] text-gray-300">
              PERFECTION AT ITS FINEST
            </p> */}
            <Image src="/icons/logo.svg" width={200} height={200} alt="logo_img"/>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-11 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
             className="font-poppins text-base font-light leading-6 tracking-normal"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="relative flex items-center gap-4">
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-6 py-2.5 font-graphik text-[16px] font-[500] leading-[24px] tracking-[0%] text-[#0a0f2c] transition-transform hover:scale-105 lg:inline-block"
          >
            Get in touch
          </a>

          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col gap-1.5 lg:hidden"
          >
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </button>

          {/* Mobile menu */}
          {menuOpen && (
            <nav className="absolute right-0 top-full mt-3 w-64 lg:hidden">
              <div className="flex flex-col gap-4 rounded-2xl bg-[#0a0f2c] p-6 shadow-xl ring-1 ring-white/10 backdrop-blur">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm font-medium text-gray-200 hover:text-white"
                  >
                    {link}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 rounded-full bg-white px-6 py-2.5 text-center text-sm font-semibold text-[#0a0f2c]"
                >
                  Get in touch
                </a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}