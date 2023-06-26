import React, { Fragment } from "react";
import "./Popular.css";
import Accordion from "./Accordion";

function Popular() {
  const popular = [
    {
      id: "1",
      title: "Trending",
      icon: "/icons/trend.png",
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
      icon: "/icons/heart.png",
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
      icon: "/icons/walk.png",
      content: ["Item 1", "Item 2", "Item 3"],
    },
    {
      id: "4",
      title: "Permits & Licences",
      icon: "/icons/document.png",
      content: ["Item 1", "Item 2", "Item 3"],
    },
    {
      id: "5",
      title: "Your City",
      icon: "/icons/city.png",
      content: ["Item 1", "Item 2", "Item 3"],
    },
    {
      id: "6",
      title: "Your Property",
      icon: "/icons/property.png",
      content: ["Item 1", "Item 2", "Item 3"],
    },
  ];

  const [isActiveBigScreen, setIsActiveBigScreen] = React.useState(
    popular[0].id
  );
  const [isActiveSmallScreen, setIsActiveSmallScreen] = React.useState(null);

  const [isAccordionVisible, setIsAccordionVisible] = React.useState(true);

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
                isActiveBigScreen === item.id
                  ? "#165788"
                  : "rgba(9, 70, 115, 0.8)",
            }}
            className="pop__wrap"
            key={item.id}
            onClick={() =>
              setIsActiveBigScreen(
                isActiveBigScreen === item.id ? item.id : item.id
              )
            }
          >
            <img className="images" src={item.icon} alt="" />
            <span>{item.title}</span>
            {isActiveBigScreen === item.id ? (
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
      {isActiveBigScreen && (
        <div className="pop__child">
          {popular.map((item) => (
            <div key={item.id}>
              {item.id === isActiveBigScreen && (
                <ul className="childList">
                  {item?.content?.map((contentItem, index) => (
                    <Fragment key={index}>
                      <a href={"#"}>{contentItem}</a>
                      {index === item?.content?.length - 1 ? null : (
                        <small> | </small>
                      )}
                    </Fragment>
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
              isActive={isActiveSmallScreen}
              setIsActive={setIsActiveSmallScreen}
              id={id}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Popular;
