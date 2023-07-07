import React from "react";
import styles from "./Everyone.module.css";
import { CustomSlideIn } from "../../CustomReveal";

const boxes = {
  language: {
    image: "/images/project-1.jpeg",
    title: "#InvestKafanchan",
    description:
      "Find out about the Municpality’s objectives towards investments, Solid Minerals, Tourism etc",
  },

  diaspora: {
    image: "/images/project-2.jpeg",
    title: "Street lighting Projects",
    description:
      "We are taking alot of strides to the provision of Street lights in all parts of the Municipality.",
  },

  afro: {
    image: "/images/project-3.jpeg",
    title: "Emergency Services",
    description:
      "Improving emergency services for fire safety awareness, prevention, and protection of residents.",
  },

  tutors: {
    image: "/images/project-4.jpeg",
    title: "2022 KMA Tree Planting Campaign",
    description: "ADKAF plants a Tree to Kick off the Tree Planting Campaign",
  },

  business: {
    image: "/images/project-1.jpeg",
    title: "#InvestKafanchan",
    description:
      "Find out about the Municpality’s objectives towards investments, Solid Minerals, Tourism etc",
  },
};

const SingleBox = ({ item, slideInDirection, slideInDuration }) => {
  return (
    <CustomSlideIn direction={slideInDirection} duration={slideInDuration}>
      <div className={styles.box}>
        <main className={styles.leftBorder}>
          <main></main>
        </main>
        <img src={item?.image} alt="language" />
        <div>
          <h4>{item?.title}</h4>
          <p>{item?.description}</p>
        </div>
      </div>
    </CustomSlideIn>
  );
};

const MutaEveryone = () => {
  return (
    <>
      <div className={styles.muta_everyone}>
        <div className={styles.blur}></div>
        <main>
          <section>
            <header>
              <h1>
                <span>Kafanchan </span> Municipal Authority
              </h1>

              <p>
                Kafanchan Municipal Authority was created with the goal of
                bringing the government closer to the people. The Government of
                His Excellency, Mal Nasir Ahmed El- Rufai has the interests of
                the people as its core mandate...
              </p>
            </header>

            <div className={styles.columns}>
              <div
                className={styles.column}
                style={{ justifyContent: "flex-end" }}
              >
                <SingleBox
                  slideInDirection="left"
                  slideInDuration={2000}
                  item={boxes?.language}
                />
              </div>
              <div
                className={styles.column}
                style={{ justifyContent: "flex-start" }}
              >
                <SingleBox
                  slideInDirection="left"
                  slideInDuration={1000}
                  item={boxes?.diaspora}
                />
              </div>
            </div>
          </section>

          <section>
            <div className={styles.right}>
              <div className={styles.columns}>
                <div
                  className={styles.column}
                  style={{ justifyContent: "space-between" }}
                >
                  <SingleBox
                    slideInDuration={2000}
                    slideInDirection="right"
                    item={boxes?.afro}
                  />
                  <SingleBox
                    slideInDuration={2000}
                    slideInDirection="right"
                    item={boxes?.tutors}
                  />
                </div>
              </div>
              <div
                className={styles.columns}
                style={{ justifyContent: "flex-end" }}
              >
                <div
                  className={styles.column}
                  style={{ justifyContent: "center", alignItems: "flex-end" }}
                >
                  <SingleBox
                    slideInDuration={1000}
                    slideInDirection="right"
                    item={boxes?.business}
                  />
                </div>
              </div>
            </div>
          </section>

          <div className={styles.smallerScreenView}>
            {Object.keys(boxes).map((x, i) => {
              const item = {
                image: "",
                title: "",
                description: "",
              };

              if (x === "language") {
                item.image = boxes.language.image;
                item.title = boxes.language.title;
                item.description = boxes.language.description;
              }

              if (x === "diaspora") {
                item.image = boxes.diaspora.image;
                item.title = boxes.diaspora.title;
                item.description = boxes.diaspora.description;
              }

              if (x === "afro") {
                item.image = boxes.afro.image;
                item.title = boxes.afro.title;
                item.description = boxes.afro.description;
              }

              if (x === "tutors") {
                item.image = boxes.tutors.image;
                item.title = boxes.tutors.title;
                item.description = boxes.tutors.description;
              }

              if (x === "business") {
                item.image = boxes.business.image;
                item.title = boxes.business.title;
                item.description = boxes.business.description;
              }

              return <SingleBox item={item} key={item.image + i} />;
            })}
          </div>
        </main>
      </div>
    </>
  );
};

export default MutaEveryone;
