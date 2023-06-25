import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import MutaEveryone from "./components/Homepage/everyone/Everyone";
import OurPartners from "./components/our-partners/OurPartners";
import SocialIcons from "./resusables/SocialIcons";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <MutaEveryone />
      <OurPartners />

      <div
        style={{
          background: "#165788",
          minHeight: 50,
        }}
      >
        <div
          style={{
            margin: "auto",
            width: "100%",
            maxWidth: 1600,
            color: "#fff",
            display: "flex",
            flexWrap: "wrap",
            padding: "30px",
            fontSize: 13,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <span style={{ color: "#fff" }}>
              ©Kafanchan Municipal Authority.
            </span>{" "}
            <small
              style={{
                padding: "0 20px",
              }}
            >
              |
            </small>
            <span style={{ color: "#fff" }}>2023 All Rights Reserved</span>
            <small
              style={{
                padding: "0 20px",
              }}
            >
              |
            </small>
            <span style={{ color: "#fff" }}>
              KMA is a trademark and service mark of the Municipal of Kafanchan.
            </span>
          </div>

          <SocialIcons color="#ec9f09" background="#ffffff00" />
        </div>
      </div>
    </>
  );
}

export default App;
