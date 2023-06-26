import React from "react";
import styles from "./Banner.module.css";
export default function Banner({ title }) {
  return (
    <div className={styles.banner}>
      <div>
        <h4>{`Kafanchan Municipal Authority`.toUpperCase()}</h4>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
