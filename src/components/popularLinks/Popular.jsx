import React from "react";
import "./Popular.css";
import FaArrowTrendDown from "react-icons/fa";
import Accordion from "./Accordion";
import { div } from "@tensorflow/tfjs";

function Popular() {
  const popular = [
    {
      id: "1",
      title: "Trending",
      icon: "/videos/trending.png",
      content: [
        "By-Election  for Mayor",
        "Parking Violations",
        "Property Tax Lookup",
        "Drop-in Swimming & Water Play",
        "Waste Reduction",
      ],
    },

    {
      id: "2",
      title: "Healthy Living",
      icon: "/videos/trending.png",
      content: [
        "Respiratory Viruses",
        "COVID-19 Vaccines",
        "MPOX (Monkeypox)",
        "Mental Health",
        "Child Vaccination",
      ],
    },

    {
      id: "3",
      title: "Getting Around",
      icon: "/videos/trending.png",
      content: ["Item 1", "Item 2", "Item 3"],
    },
    {
      id: "4",
      title: "Permits & Licences",
      icon: "/videos/trending.png",
      content: ["Item 1", "Item 2", "Item 3"],
    },
    {
      id: "5",
      title: "Your City",
      icon: "/videos/trending.png",
      content: ["Item 1", "Item 2", "Item 3"],
    },
    {
      id: "6",
      title: "Your Property",
      icon: "/videos/trending.png",
      content: ["Item 1", "Item 2", "Item 3"],
    },
  ];

  const [isActive, setIsActive] = React.useState(popular[0].id);
  const [isAccordionVisible, setIsAccordionVisible] = React.useState(false);

  const toggleAccordion = () => {
    setIsAccordionVisible(!isAccordionVisible);
  };

  return (
    <>
      <div className="pop__container">
        {popular.map((item) => (
          <div
            style={{
              backgroundColor:
                isActive === item.id ? "#165788" : "rgba(9, 70, 115, 0.5)",
            }}
            className="pop__wrap"
            key={item.id}
            onClick={() =>
              setIsActive(isActive === item.id ? item.id : item.id)
            }
          >
            <img className="images" src={item.icon} alt="" />
            <span>{item.title}</span>
            {isActive === item.id ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  bottom: -15,
                }}
              >
                <img
                  style={{ height: "15px" }}
                  src="/videos/active-tab.svg"
                  alt=""
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
      {isActive && (
        <div className="pop__child">
          {popular.map((item) => (
            <div key={item.id}>
              {item.id === isActive && (
                <ul className="childList">
                  {item.content.map((contentItem, index) => (
                    <li key={index}>{contentItem}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
      <div className="linkContainer">
        <p onClick={toggleAccordion}>Popular Links</p>
      </div>
      {isAccordionVisible && (
        <div className="accordion">
          {popular.map(({ title, content, id }) => (
            <Accordion
              key={id}
              title={title}
              content={content}
              isActive={isActive}
              setIsActive={setIsActive}
              id={id}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Popular;
