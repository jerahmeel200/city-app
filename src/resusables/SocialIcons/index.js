import React from "react";
import "./SocialIcons.css";

const icons = [
  "fab fa-twitter",
  "fab fa-facebook",
  "fab fa-instagram",
  "fab fa-linkedin",
  "fa fa-rss",
];
function SocialIcons({
  background = "#fff",
  fontSize = 20,
  width = 40,
  color = "#165788",
}) {
  return (
    <div className="socialIcons">
      {icons.map((icon) => (
        <div
          key={icon}
          style={{
            margin: "0 3px",
            border: "1px solid " + color,
            width,
            height: width,
            borderRadius: width / 2,
            background,
          }}
        >
          <i
            aria-hidden="true"
            role="img"
            style={{
              fontSize,
              color,
            }}
            className={icon}
          ></i>
        </div>
      ))}
    </div>
  );
}

export default SocialIcons;
