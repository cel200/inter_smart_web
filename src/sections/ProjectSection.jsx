"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";

// distinct project images — repeated so the filmstrip has room to slide
const PROJECT_IMAGES = [
  "/images/project_1.svg",
  "/images/project_2.svg",
  "/images/project_1.svg",
  "/images/project_2.svg",
];

const SLIDE_INTERVAL = 3000;

// on desktop, the first image is full-width and the second peeks in at half width
const MOBILE_ITEM_WIDTH = 100;
const DESKTOP_ITEM_WIDTH = 200 / 3;

export default function ProjectsSection() {
  const [itemWidth, setItemWidth] = useState(DESKTOP_ITEM_WIDTH);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () =>
      setItemWidth(query.matches ? DESKTOP_ITEM_WIDTH : MOBILE_ITEM_WIDTH);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // extra clones on the end so the slide never runs out of frames
  const cloneCount = Math.ceil(100 / itemWidth);
  const track = [...PROJECT_IMAGES, ...PROJECT_IMAGES.slice(0, cloneCount)];

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  // once we've slid past the real images (into the clones), snap back invisibly
  useEffect(() => {
    if (index !== PROJECT_IMAGES.length) return;
    const timeout = setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, 700);
    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    if (!animate) {
      const raf = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [animate]);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-normal text-[#182434] sm:text-3xl">
            Our Recent AI Projects
          </h2>
          <p className="mx-auto mt-3 max-w-lg leading-[28px] text-sm text-[#182434]">
            As one of India&apos;s leading AI development companies, SysAlly offers the
            following services to businesses.
          </p>
          <span className="mx-auto mt-4 block h-1 w-25 rounded-full bg-[#2AA9C4]" />
        </div>

        {/* Sliding filmstrip */}
        <div className="mt-12 overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${index * itemWidth}%` }}
            transition={{ duration: animate ? 0.7 : 0, ease: "easeInOut" }}
          >
            {track.map((src, i) => (
              <div
                key={i}
                className="flex-none px-3"
                style={{ width: `${itemWidth}%` }}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                  <Image
                    src={src}
                    alt="AI project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Button as="a" href="#projects" size="lg">
            View all projects
          </Button>
        </div>
      </div>
    </section>
  );
}
