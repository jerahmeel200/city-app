import React from "react";
import { Slide, Fade } from "react-awesome-reveal";

export function CustomSlideIn({
  children,
  direction = "left",
  duration = 1000,
  triggerOnce = true,
}) {
  return (
    <Slide direction={direction} duration={duration} triggerOnce={triggerOnce}>
      {children}
    </Slide>
  );
}

export function CustomFadeCascade({
  children,
  direction = "left",
  duration = 1000,
  triggerOnce = true,
}) {
  return (
    <Fade cascade duration={duration} triggerOnce={triggerOnce}>
      {children}
    </Fade>
  );
}
