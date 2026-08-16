"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";

const NAV_LINKS = ["Services", "Solutions", "Virtual team", "Company", "About us"];

const SLIDES = [
  {
    title: ["AI development company", "In India"],
    description:
      "One of the leading AI development companies in India with remarkable expertise in artificial intelligence solutions. Our forte in AI technologies spans diverse verticals like machine learning (ML)…",
    image: "/images/hero_img.svg",
  },
  {
    title: ["Machine learning", "solutions that scale"],
    description:
      "We build production-ready ML systems that turn your data into a durable competitive advantage — from model design and training to deployment and monitoring.",
    image: "/images/hero_img2.svg",
  },
  {
    title: ["Trusted AI partner", "for growing businesses"],
    description:
      "From strategy to execution, our AI experts help you identify opportunities, build custom models, and ship solutions that deliver measurable business impact.",
    image: "/images/hero_img3.svg",
  },
];

const SLIDE_INTERVAL = 4000;

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((i) => (i + 1) % SLIDES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[activeSlide];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0f2c] text-white">
      {/* Background face / circuit image */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-3/5 lg:w-1/2">
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.image + activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority
              className="object-cover object-right opacity-90"
            />
          </motion.div>
        </AnimatePresence>
        {/* Left-to-right fade so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f2c] via-[#0a0f2c]/70 to-transparent" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 lg:px-10">
        {/* ---------- Navbar ---------- */}
      <Header/>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="flex flex-col gap-4 rounded-2xl bg-white/5 p-6 backdrop-blur lg:hidden">
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
          </nav>
        )}

        {/* ---------- Hero content ---------- */}
        <div className="flex flex-1 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="max-w-2xl py-16"
            >
              <h1 className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                <span className="block whitespace-nowrap">{slide.title[0]}</span>
                <span className="block">{slide.title[1]}</span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
                {slide.description}
              </p>

              <a
                href="#contact"
                className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0a0f2c] transition-transform hover:scale-105"
              >
                Reach us
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ---------- Carousel dots ---------- */}
        <div className="flex justify-center gap-2 pb-8">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActiveSlide(i)}
              className={`h-2 rounded-full transition-all ${
                activeSlide === i ? "w-6 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}