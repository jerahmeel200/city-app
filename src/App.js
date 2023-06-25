import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import MutaEveryone from "./components/Homepage/everyone/Everyone";
import OurPartners from "./components/our-partners/OurPartners";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <MutaEveryone />
      <OurPartners />
    </>
  );
}

export default App;
