import React from "react";
import "./OurPartners.css";

function OurPartners() {
  const links = [
    "/images/logo-off-1.jpeg",
    "/images/logo-off-2.jpeg",
    "/images/logo-off-3.jpeg",
    "/images/logo-off-5.jpeg",
    "/images/logo-off-6.jpeg",
    "/images/logo-off-7.jpeg",
  ];
  return (
    <div className="partContainer" style={{ margin: "50px 0", height: "100%" }}>
      <h2 style={{}}>
        <small>Our</small>
        {"  "} <span> Partners</span>
      </h2>

      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          flexWrap: "wrap",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {links.map((x) => {
          return (
            <div
              style={{
                width: 250,
                height: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
              }}
            >
              <img src={x} alt="" style={{ height: 200, width: 200 }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurPartners;
