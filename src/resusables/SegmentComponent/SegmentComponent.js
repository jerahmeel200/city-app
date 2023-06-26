import React from "react";
import styles from "./SegmentComponent.module.css";

export default function SegmentComponent({ left = null, right = null }) {
  return (
    <div className={styles.container}>
      <div className={styles["left"]}>{left}</div>
      <div className={styles["right"]}>{right}</div>
    </div>
  );
}

export const SegmentImage = ({ src = "", useBorder = true }) => {
  if (useBorder)
    return (
      <div className={styles.segmentImage}>
        <img src={src} />
      </div>
    );

  return (
    <div className={styles.segmentImageNoBorder}>
      <img src={src} />
    </div>
  );
};
