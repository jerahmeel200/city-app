import React from "react";
import Lottie from "react-lottie";
import animationData from "./loading.json";

const options = {
  loop: true, // Set to true if you want the animation to loop
  autoplay: true, // Set to true if you want the animation to start automatically
  animationData: animationData, // Provide the imported animation JSON object
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice", // Adjust the aspect ratio based on your needs
  },
};

export default function Loading() {
  return (
    <div style={{ width: 100, height: 100 }}>
      <Lottie options={options} />
    </div>
  );
}
