import React from "react";
import "./Popular.css";
import FaArrowTrendDown from "react-icons/fa";
import Accordion from "./Accordion";

function Popular() {
  const popular = [
    {
      title: "items",
      icon: "/videos/trending.png",
      content: ["Item 1", "Item 2", "Item 3"],
    },

    {
      title: "items",
      icon: "/videos/trending.png",
      content: ["Item 1", "Item 2", "Item 3"],
    },

    {
      title: "items",
      icon: "/videos/trending.png",
      content: ["Item 1", "Item 2", "Item 3"],
    },

    {
      title: "items",
      icon: "/videos/trending.png",
      content: ["Item 1", "Item 2", "Item 3"],
    },

    {
      title: "items",
      icon: "/videos/trending.png",
      content: ["Item 1", "Item 2", "Item 3"],
    },

    {
      title: "items",
      icon: "/videos/trending.png",
      content: ["Item 1", "Item 2", "Item 3"],
    },
  ];
  return (
    <>
      <div className="pop__container">
        {popular.map((item, index) => (
          <div className="pop__wrap">
            <img className="images" src={item.icon} alt="" />
            trending
          </div>
        ))}
      </div>

      <div className="accordion">
        hello
        {popular.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </>
  );
}

export default Popular;
