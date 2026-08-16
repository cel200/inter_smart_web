"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const STEPS = [
  {
    tab: "Identifying The Problem",
    title: "01",
    image: "/images/process.svg",
    content:
      "The first step of building your custom AI solutions begins with identifying the problems or opportunities that the system can solve. Our team runs a thorough analysis to examine the pain points of the project and create a business case. Analyzing the current practices and data sets is necessary to identify areas for implementing automation and development.",
  },
  {
    tab: "Preparing The Data",
    title: "02",
    image: "/images/process.svg",
    content:
      "We gather, clean, and structure the data your model will learn from. High-quality, well-labeled data is the foundation of any successful AI solution, so we ensure it is accurate, relevant, and representative of the problem space.",
  },
  {
    tab: "The Suited AI Model",
    title: "03",
    image: "/images/process.svg",
    content:
      "Based on your goals and data, we select the most suitable AI/ML model and architecture. We weigh accuracy, performance, and cost to choose an approach that fits your specific use case.",
  },
  {
    tab: "Training The Model",
    title: "04",
    image: "/images/process.svg",
    content:
      "We train the selected model on your prepared data, iterating on parameters and validating results until the model reaches the performance benchmarks required for production.",
  },
  {
    tab: "Model Evaluation",
    title: "05",
    image: "/images/process.svg",
    content:
      "The trained model is rigorously evaluated against test data and real-world scenarios to measure accuracy, reliability, and fairness before it moves forward.",
  },
  {
    tab: "Deployment",
    title: "06",
    image: "/images/process.svg",
    content:
      "We deploy the validated model into your environment, integrating it seamlessly with your existing systems and workflows for smooth, scalable operation.",
  },
  {
    tab: "Monitoring & Support",
    title: "07",
    image: "/images/process.svg",
    content:
      "After launch, we continuously monitor the model's performance, retrain it as data evolves, and provide ongoing support to keep your AI solution effective over time.",
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const [tabStart, setTabStart] = useState(0);
  const [visibleTabs, setVisibleTabs] = useState(4);
  const total = STEPS.length;

  // fewer tabs fit on narrow screens without wrapping/overflowing
  useEffect(() => {
    const smQuery = window.matchMedia("(min-width: 640px)");
    const lgQuery = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      const count = lgQuery.matches ? 4 : smQuery.matches ? 3 : 2;
      setVisibleTabs(count);
      setTabStart((start) => Math.min(start, Math.max(total - count, 0)));
    };
    update();
    smQuery.addEventListener("change", update);
    lgQuery.addEventListener("change", update);
    return () => {
      smQuery.removeEventListener("change", update);
      lgQuery.removeEventListener("change", update);
    };
  }, [total]);

  // slide the tab window just enough to bring the given step into view
  const revealTab = (newActive) => {
    setTabStart((start) => {
      if (newActive < start) return newActive;
      if (newActive > start + visibleTabs - 1) return newActive - visibleTabs + 1;
      return start;
    });
  };

  const prev = () => {
    const newActive = active === 0 ? total - 1 : active - 1;
    setActive(newActive);
    revealTab(newActive);
  };
  const next = () => {
    const newActive = active === total - 1 ? 0 : active + 1;
    setActive(newActive);
    revealTab(newActive);
  };

  const visibleSteps = STEPS.slice(tabStart, tabStart + visibleTabs);
  const step = STEPS[active];

  return (
    <section className="bg-[#0d1b2a] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-poppins font-normal text-[#FFFFFF] text-[33px] leading-[56px] tracking-[-0.5px]">
            Our AI Development Process
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-poppins font-extralight text-sm leading-[28px] text-[#FFFFFF]">
            Developing an AI solution according to your needs involves a structured
            approach to assure its success and effectiveness. Our expert AI
            developers ensure the project&apos;s success by following a systematic
            process in building your artificial intelligence solution.
          </p>
          <span className="mx-auto mt-5 block h-1 w-24 rounded-full bg-[#0393B0]" />
        </div>

        {/* Counter + arrows */}
        <div className="mt-8 flex items-center justify-end gap-4">
          <button
            onClick={prev}
            aria-label="Previous step"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-[#0d1b2a] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <span className="text-sm tabular-nums text-gray-300">
            {active + 1}/{total}
          </span>
          <button
            onClick={next}
            aria-label="Next step"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-[#0d1b2a] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="mt-4">
          <div className="flex border-t border-white/10">
            {visibleSteps.map((s) => {
              const i = STEPS.indexOf(s);
              const isActive = i === active;
              return (
                <button
                  key={s.tab}
                  onClick={() => {
                    setActive(i);
                    revealTab(i);
                  }}
                  className={`relative -mt-px flex-1 whitespace-nowrap px-3 py-4 text-md font-poppins font-medium transition-colors sm:px-6 sm:text-sm ${
                    isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {/* active top border */}
                  <span
                    className={`absolute inset-x-0 top-0 h-0.5 transition-colors ${
                      isActive ? "bg-white" : "bg-transparent"
                    }`}
                  />
                  {s.tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content: card + image */}
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          {/* Card */}
          <div className="rounded-xl bg-white p-8 text-[#0d1b2a] shadow-xl">
            <p className="text-lg font-poppins font-medium">{step.title}</p>
            <p className="mt-3 text-sm leading-[24px] text-[#1A1A24]">
              {step.content}
            </p>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image
              src={step.image}
              alt={step.tab}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}