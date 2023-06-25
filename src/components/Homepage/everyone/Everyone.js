import React from "react";
import styles from "./Everyone.module.css";

const boxes = {
  language: {
    image: "/assets/images/about-us-page/language.png",
    title: "Language lovers",
    description: "You enjoy learning languages for the fun of it.",
  },

  diaspora: {
    image: "/assets/images/about-us-page/diaspora.png",
    title: "African Parents in Diaspora",
    description:
      "Seeking ways to educate your kids about your native languages the fun way",
  },

  afro: {
    image: "/assets/images/about-us-page/afro.png",
    title: "Afro-Enthusiasts",
    description:
      "You love the African culture and have a strong interest in African Languages",
  },

  tutors: {
    image: "/assets/images/about-us-page/tutors.png",
    title: "Language Tutors",
    description:
      "You enjoy helping people improve their language skills while getting paid for doing what you love.",
  },

  business: {
    image: "/assets/images/about-us-page/business.png",
    title: "Business Professionals",
    description:
      "You travel for business and need African languages to boost your communication skills.",
  },
};

const SingleBox = ({ item }) => {
  return (
    <div className={styles.box}>
      <img src={item?.image} alt="language" />
      <div>
        <h4>{item?.title}</h4>
        <p>{item?.description}</p>
      </div>
    </div>
  );
};

const MutaEveryone = () => {
  return (
    <>
      <div className={styles.muta_everyone}>
        <main>
          <section>
            <header>
              <h1>
                Muta is for <span>Everyone!</span>
              </h1>

              <p>
                Created by Africans, Muta is preserving the digital footprints
                of African Languages and culture by helping non-Africans across
                the globe learn African languages the fun and easy way.
              </p>
            </header>

            <div className={styles.columns}>
              <div
                className={styles.column}
                style={{ justifyContent: "flex-end" }}
              >
                <SingleBox item={boxes?.language} />
              </div>
              <div
                className={styles.column}
                style={{ justifyContent: "flex-start" }}
              >
                <SingleBox item={boxes?.diaspora} />
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
                  <SingleBox item={boxes?.afro} />
                  <SingleBox item={boxes?.tutors} />
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
                  <SingleBox item={boxes?.business} />
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
