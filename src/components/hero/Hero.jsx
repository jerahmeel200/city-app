import React, { useState } from "react";

import Popular from "../popularLinks/Popular";
import Loading from "../../resusables/Loading/Loading";
import styles from "./Hero.module.css";

function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = (e) => {
    setVideoLoaded(true);
  };

  return (
    <>
      <div className={styles.videoContainer}>
        {!videoLoaded && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Loading />
          </div>
        )}

        <video
          className={styles.video}
          autoPlay
          muted
          loop
          poster="/videos/market.jpg"
          onLoadedData={handleVideoLoad}
          playsinline
        >
          <source src="/videos/market-big_muted.mp4" type="video/mp4" />
        </video>
      </div>
      <Popular />
    </>
  );
}

export default Hero;
