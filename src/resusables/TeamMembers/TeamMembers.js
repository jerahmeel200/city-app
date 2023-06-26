import React from "react";
import styles from "./TeamMember.module.css";

export default function TeamMember({ members = [] }) {
  return (
    <div className={styles.container}>
      {members.map((mem) => {
        return (
          <div className={styles.boxbox}>
            <figure>
              <img className={styles.img} src={mem?.img} />
            </figure>
            <h3>{mem?.name} </h3>
            <h4>{mem?.position} </h4>
          </div>
        );
      })}
    </div>
  );
}
