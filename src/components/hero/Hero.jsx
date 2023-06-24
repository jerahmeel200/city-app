import React from "react";
import styles from "./Hero.module.css";
import Popular from "../popularLinks/Popular";

function Hero() {
  return (
    <>
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          // src="/videos/market-big.mp4"
          src="/videos/market-medium.mp4"
          autoPlay
          loop
          muted
        />
      </div>
      <Popular />
    </>
  );
}

export default Hero;
