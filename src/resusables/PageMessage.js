import React from "react";

function PageMessage({ msg }) {
  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        maxWidth: "1000px",
      }}
    >
      <p style={{ textAlign: "center", lineHeight: "25px", padding: "0 30px" }}>
        {" "}
        {msg}
      </p>
    </div>
  );
}

export default PageMessage;
