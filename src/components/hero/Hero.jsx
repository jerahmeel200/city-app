import React, { useState } from "react";

import Popular from "../popularLinks/Popular";
import Loading from "../../resusables/Loading/Loading";
import styles from "./Hero.module.css";

import { Fade, Slide } from "react-awesome-reveal";

function Hero() {
  const [showWelcome, setshowWelcome] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = (e) => {
    setVideoLoaded(true);
  };

  return (
    <>
      <div className={styles.videoContainer}>
        {!videoLoaded && (
          <div className={styles.placeholderImageWrapper}>
            <main>
              <Loading />
            </main>
            <img alt="Placeholder" src="/videos/market.jpg" />
          </div>
        )}

        {showWelcome ? (
          <div className={styles.welcomeDiv}>
            <Fade delay={1e3} cascade damping={1e-1}>
              Welcome To Kafanchan Municipal Authority...
            </Fade>
          </div>
        ) : null}

        <video
          className={!videoLoaded ? styles.hide : styles.video}
          src="/videos/market-big_muted.mp4"
          // src="/videos/market.mp4"
          autoPlay
          muted
          loop
          poster="/videos/market.jpg"
          onLoadedData={handleVideoLoad}
        />
      </div>
      <Popular />
    </>
  );
}

export default Hero;
