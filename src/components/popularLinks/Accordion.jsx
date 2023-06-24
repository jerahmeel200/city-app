import React, { useState, useEffect } from "react";
import "./Popular.css";

function Accordion({ title, content, isActive, setIsActive, id }) {
  const show = isActive === id;

  return (
    <>
      <div className="accordion-section">
        <div
          className="accordionTitle"
          onClick={() => setIsActive(show ? null : id)}
        >
          <span>{title}</span>
          <div className="show">{show ? "-" : "+"}</div>
        </div>
        {show && (
          <div className="accordionContent">
            {content.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Accordion;
