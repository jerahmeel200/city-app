import React from "react";
import SocialIcons from "../../resusables/SocialIcons";

export default function Footer() {
  return (
    <div
      style={{
        background: "#f5f5f5",
        minHeight: 50,
      }}
    >
      <div
        style={{
          margin: "auto",
          width: "100%",
          maxWidth: 1600,
          color: "#777777",
          display: "flex",
          flexWrap: "wrap",
          padding: "30px",
          fontSize: 13,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src="/images/logo.png" style={{ height: 50 }} />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "10px 0",
          }}
        >
          <span style={{ color: "#777777" }}>
            © Kafanchan Municipal Authority.
          </span>{" "}
          <small
            style={{
              padding: "0 20px",
            }}
          >
            |
          </small>
          <span style={{ color: "#777777" }}>2023 All Rights Reserved.</span>
          <small
            style={{
              padding: "0 20px",
            }}
          >
            |
          </small>
          <span style={{ color: "#777777" }}>
            KMA is a trademark and service mark of the Municipal of Kafanchan.
          </span>
        </div>

        <SocialIcons color="#ec9f09" background="#77777777777700" />
      </div>
    </div>
  );
}
