import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactSection from "@/sections/ContactSection";
import Hero from "@/sections/Hero";
import ProcessSection from "@/sections/ProcessSection";
import ProjectsSection from "@/sections/ProjectSection";
import ServicesSection from "@/sections/ServiceSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Hero />
        <ServicesSection/>
        <ProcessSection/>
        <ContactSection/>
        <ProjectsSection/>
      </main>
      <Footer />
    </>
  );
}
