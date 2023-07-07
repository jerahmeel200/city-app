import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import MutaEveryone from "../components/Homepage/everyone/Everyone";
import OurImpact from "../components/Homepage/OurImpact/OurImpact";
import OurPartners from "../components/our-partners/OurPartners";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MutaEveryone />
      <OurImpact />
      <OurPartners />
      <Footer />
    </>
  );
}
