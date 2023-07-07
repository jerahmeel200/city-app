import React from "react";
import styles from "./OurImpact.module.css";

import CustomTicker from "../../CustomTicker";
import { CustomFadeCascade } from "../../CustomReveal";

export default function OurImpact() {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.left}>
          <CustomFadeCascade>
            <h1>Our Impact</h1>

            <h4>
              <CustomTicker end={10000} suffix={" +"} prefix={""} />
            </h4>
            <p>Farmers accessed Financial Services</p>

            <h4>
              <CustomTicker end={50000} suffix={" +"} prefix={""} />
            </h4>
            <p>Active farmers</p>

            <h4>
              <CustomTicker end={100000} suffix={" +"} prefix={""} />
            </h4>
            <p>Farmers benefited from Digital Education Content</p>
          </CustomFadeCascade>
        </div>
        <div className={styles.right}>
          <div className={styles.rightImg}>
            <div className={styles.blurImg}></div>
            <div className={styles.imgPlay}>
              <div>
                <i
                  className="fa fa-play"
                  aria-hidden="true"
                  role="img"
                  style={{
                    fontSize: "30px",
                    color: "#fff",
                  }}
                ></i>
              </div>
            </div>
            <img src="/images/project-4.jpeg" />
          </div>
        </div>
      </main>
    </div>
  );
}
