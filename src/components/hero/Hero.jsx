// import React, { useState, useEffect } from "react";

// import Popular from "../popularLinks/Popular";
// import Loading from "../../resusables/Loading/Loading";
// import styles from "./Hero.module.css";

// import { Fade, Slide } from "react-awesome-reveal";

// function Hero() {
//   const [showWelcome, setshowWelcome] = useState(true);
//   const [videoLoaded, setVideoLoaded] = useState(false);

//   const handleVideoLoad = (e) => {
//     setVideoLoaded(true);
//   };

//   return (
//     <>
//       <div className={styles.videoContainer}>
//         {!videoLoaded && (
//           <div className={styles.placeholderImageWrapper}>
//             <main>
//               <Loading />
//             </main>
//             <ImageShow />
//           </div>
//         )}

//         {showWelcome ? (
//           <div className={styles.welcomeDiv}>
//             <Fade delay={1e3} cascade damping={1e-1}>
//               Welcome To Kafanchan Municipal Authority...
//             </Fade>
//           </div>
//         ) : null}

//         <video
//           className={!videoLoaded ? styles.hide : styles.video}
//           src="/videos/market-big_muted.mp4"
//           autoPlay
//           muted
//           loop
//           poster="/videos/market.jpg"
//           onLoadedData={handleVideoLoad}
//         />
//       </div>
//       <Popular />
//     </>
//   );
// }

// const ImageShow = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     "/images/header-1.jpeg",
//     "/images/header-2.jpg",
//     "/images/header-3.jpeg",
//     "/images/header-4.jpeg",
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [images.length]);

//   return <img src={images[currentIndex]} alt="Carousel Image" />;
// };

// export default Hero;

import React, { useState, useEffect } from "react";

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
        <div className={styles.placeholderImageWrapper}>
          <main></main>
          <ImageShow />
        </div>
      </div>
      <Popular />
    </>
  );
}

const ImageShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/header-1.jpeg",
    "/images/header-2.jpg",
    "/images/header-3.jpeg",
    "/images/header-4.jpeg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  return <img src={images[currentIndex]} alt="Carousel Image" />;
};

export default Hero;
