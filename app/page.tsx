import type { Metadata } from "next";

import { AboutBlurb } from "@/components/sections/AboutBlurb";
import { Brands } from "@/components/sections/Brands";
import { ContactSection } from "@/components/sections/ContactSection";
import { Creators } from "@/components/sections/Creators";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { WhyAvoryn } from "@/components/sections/WhyAvoryn";

export const metadata: Metadata = {
  title: "Avoryn - Influencer Marketing Agency India",
  description:
    "Avoryn is an influencer marketing agency connecting brands with creators for campaigns that drive real engagement and results.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutBlurb />
      <Services />
      <Creators />
      <Brands />
      <Process />
      <WhyAvoryn />
      <ContactSection />
    </>
  );
}
