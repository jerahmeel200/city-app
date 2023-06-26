import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import Banner from "../resusables/Banner/Banner";

const styles = {
  p: {
    fontSize: 16,
    lineHeight: "26px",
    textAlign: "left",
    padding: 0,
    margin: 0,
  },
  h2: {
    fontSize: 40,
    lineHeight: "60px",
    fontWeight: "700",
    color: "#165788",
    textAlign: "left",
    padding: 0,
    margin: 0,
    marginTop: 40,
    marginBottom: 20,
  },
};
export default function Mandate() {
  return (
    <>
      <Header />
      <Banner title="Our Mandate" />

      <div
        style={{
          padding: "100px 30px",
          width: "100%",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        <p style={styles.p}>
          Welcome to the Mandate page of Kafanchan Municipal Authority (KMA). At
          KMA, our mandate is to work tirelessly towards the betterment of the
          municipality and its residents. We are dedicated to creating a
          vibrant, sustainable, and inclusive community that thrives on good
          governance, innovation, and citizen participation.
        </p>

        <p style={styles.p}>Our key mandates include:</p>

        <h2 style={styles.h2}>Sustainable Development</h2>
        <p style={styles.p}>
          KMA is committed to promoting sustainable development practices in
          Kafanchan. We strive to implement eco-friendly initiatives, preserve
          our natural resources, and create a greener and cleaner environment
          for present and future generations.
        </p>

        <h2 style={styles.h2}>Infrastructure Development</h2>
        <p style={styles.p}>
          We recognize the importance of robust infrastructure for the growth
          and prosperity of our municipality. KMA is focused on planning and
          executing infrastructure projects that enhance connectivity, improve
          public services, and foster economic development.
        </p>

        <h2 style={styles.h2}>Efficient Service Delivery</h2>

        <p style={styles.p}>
          We are determined to provide efficient and responsive services to the
          residents of Kafanchan. By streamlining administrative processes,
          embracing technology, and ensuring transparency, we aim to deliver
          high-quality services that meet the needs and expectations of our
          community.
        </p>

        <h2 style={styles.h2}>Community Engagement</h2>
        <p style={styles.p}>
          KMA believes in the power of community participation and engagement.
          We actively seek the input and involvement of our residents,
          businesses, and stakeholders in decision-making processes, ensuring
          that their voices are heard, and their perspectives are considered.
        </p>

        <h2 style={styles.h2}>Social Welfare and Inclusivity</h2>
        <p style={styles.p}>
          We are committed to promoting social welfare and inclusivity in
          Kafanchan. KMA works towards providing equal opportunities, social
          support systems, and initiatives that empower marginalized groups and
          ensure that no one is left behind.
        </p>

        <h2 style={styles.h2}>Economic Growth and Investment</h2>
        <p style={styles.p}>
          KMA recognizes the importance of a thriving local economy. We strive
          to create an enabling environment for businesses to flourish, attract
          investments, and generate employment opportunities that contribute to
          the overall economic growth of the municipality.
        </p>

        <p style={styles.p}>
          Through these mandates, KMA aims to enhance the overall quality of
          life for our residents, build a sustainable future, and position
          Kafanchan as a model municipality. We invite you to explore our
          website to learn more about our initiatives, projects, and how you can
          actively participate in shaping the future of our municipality.
        </p>

        <p style={styles.p}>
          Together, let us work towards a prosperous and inclusive Kafanchan!
        </p>
      </div>
      <Footer />
    </>
  );
}
