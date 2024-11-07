import React from "react";
import ReactDOM from "react-dom";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
// import Platform from "@/components/Platform";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
// import QuantumAIPlatform from "@/components/Pricing";



export const metadata: Metadata = {
  title: "Coin Earn Exchange",
  description: "Together We Earn",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      
      <Feature />
      <About />
      {/* <Platform /> */}
      <FeaturesTab />
      <FunFact />
      <Brands />
      <CTA />
      <FAQ />
      <Testimonial />
      {/* <QuantumAIPlatform /> */}
      <Contact />
      <Blog />
      <Integration />
      
    </main>
  );
}
