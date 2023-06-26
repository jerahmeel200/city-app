import React from "react";
import styles from "./Quote.module.css";
export default function Quote({
  title = "",
  message = "",
  last = "",
  list = [],
}) {
  return (
    <div className={styles.container}>
      <div>
        <h2>{title}</h2>
        <p>{message}</p>
        {list && list?.length ? (
          <ul>
            {list.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        ) : null}
        <i>{last}</i>
      </div>
    </div>
  );
}
