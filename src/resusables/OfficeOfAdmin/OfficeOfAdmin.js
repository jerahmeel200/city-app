import React from "react";
import styles from "./OfficeOfAdmin.module.css";

export default function OfficeOfAdmin() {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <h2>Office of the Administrator</h2>

          <p>
            Phoebe Sukai Yayi was appointed as the pioneer Commissioner and
            Administrator of the Kafanchan Municipal Authority (KMA) in 2021.
            She is a development planner, coordinator, disaster manager, social
            worker, and community mobilizer. She has a wealth of experience in
            the public sector, having served in various capacities in the Kaduna
            State government.
          </p>

          <p>
            Yayi's mandate as Commissioner is to build a green and smart city in
            Kafanchan. She plans to do this by implementing a number of
            initiatives, including:
          </p>
        </div>

        <img src="/images/admin.png" />
      </div>
    </div>
  );
}
