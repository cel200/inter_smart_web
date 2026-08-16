"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import Button from "@/components/Button";


const SERVICES = [
  {
    title: "Hyperparameter model tuning",
    content:
      "Our AI experts handle your hyperparameter tuning, optimizing your unique machine-learning model optimization requirements. We identify the hyperparameters relevant to your algorithm and tune the values to yield the best performance of the machine learning model.",
  },
  {
    title: "AI Consultation",
    content:
      "Get strategic guidance from our AI specialists to identify high-impact opportunities, define a roadmap, and choose the right technologies for your business goals.",
  },
  {
    title: "NLP Solutions",
    content:
      "We build natural language processing systems — chatbots, sentiment analysis, document understanding, and more — that turn unstructured text into actionable insight.",
  },
  {
    title: "Custom AI Model Development",
    content:
      "From data preparation to deployment, we design and train custom AI models tailored to your domain, delivering production-ready solutions that scale.",
  },
];

export default function ServicesSection() {
  // index of the currently open item (0 = first item open by default)
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) =>
    setOpenIndex((current) => (current === index ? -1 : index));

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-10xl px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 
        className="font-poppins text-[35px] font-medium leading-[56px] tracking-[-0.5px]"
        //   className="text-2xl font-bold text-[#0d1b2a] sm:text-3xl"
          >
            Our Artificial Intelligence Services
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-6 text-[16px] text-[#182434]">
            As one of India&apos;s leading AI development companies, SysAlly offers the
            following services to businesses.
          </p>
          <span className="mx-auto mt-4 block h-1 w-26 rounded-full bg-[#0393B0]" />
        </div>

        {/* Content grid */}
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: diagram image */}
          <div className="relative mx-auto aspect-square w-full max-w-[580px] lg:ml-auto">
            <Image
              src="/images/service_img.svg"
              alt="AI services orbital diagram"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </div>

          {/* Right: accordion */}
          <div className="space-y-4 lg:max-w-[480px]">
            {SERVICES.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={service.title}
                  className={`rounded-lg transition-colors ${
                    isOpen ? "bg-gray-50" : "bg-gray-50/60"
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="font-poppins font-medium text-[22px] leading-[32px] tracking-[-0.3px]">
                      {service.title}
                    </span>
                    {isOpen ? (
                    
                    <Image src="/icons/down_arrow.svg" alt="down_arrow" width={10} height={10}/>
                    ) : (
                    <Image src="/icons/right_arrow.svg" width={6} height={6} alt="right_arrow"/>
                    )}
                  </button>

                  {/* Expandable content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className=" text-[#182434] px-5 py-4 font-poppins font-normal text-sm leading-[28px] tracking-normal">
                        {service.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button as="a" href="#services" variant="primary" size="lg" className="bg-[#182434]">
            View all services
          </Button>
        </div>
      </div>
    </section>
  );
}