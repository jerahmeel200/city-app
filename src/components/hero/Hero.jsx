import React, { useState } from "react";

import Popular from "../popularLinks/Popular";
import Loading from "../../resusables/Loading/Loading";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <>
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          // src="/videos/market.mp4"
          autoPlay
          muted
          loop
          poster="/videos/market.jpg"
          fetchpriority="high"
        >
          <source src="/videos/market-big_muted.mp4" type="video/mp4" />
        </video>
      </div>
      <Popular />
    </>
  );
}

export default Hero;
