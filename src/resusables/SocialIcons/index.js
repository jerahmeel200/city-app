import React from "react";
import "./SocialIcons.css";

const iconsDefault = [
  { name: "twitter", class: "fab fa-twitter" },
  { name: "facebook", class: "fab fa-facebook" },
  { name: "instagram", class: "fab fa-instagram" },
  { name: "linkedin", class: "fab fa-linkedin" },
  { name: "rss", class: "fa fa-rss" },
];

function SocialIcons({
  background = "#fff",
  fontSize = 20,
  width = 40,
  color = "#165788",
  twitter = true,
  facebook = true,
  instagram = true,
  linkedin = true,
  rss = true,
}) {
  const icons = iconsDefault.filter((icon) => {
    if (icon.name === "twitter" && twitter) return true;
    else if (icon.name === "facebook" && facebook) return true;
    else if (icon.name === "instagram" && instagram) return true;
    else if (icon.name === "linkedin" && linkedin) return true;
    else if (icon.name === "rss" && rss) return true;
    else return false;
  });

  return (
    <div className="socialIcons">
      {icons.map((icon) => {
        return (
          <div
            key={icon?.class}
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
              className={icon?.class}
            ></i>
          </div>
        );
      })}
    </div>
  );
}

export default SocialIcons;
