import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import Banner from "../resusables/Banner/Banner";
import Quote from "../resusables/Quote/Quote";
import SegmentComponent, {
  SegmentImage,
} from "../resusables/SegmentComponent/SegmentComponent";
import OfficeOfAdmin from "../resusables/OfficeOfAdmin/OfficeOfAdmin";

export default function About() {
  return (
    <>
      <Header />
      <Banner title="About Us" />
      <div
        style={{
          backgroundImage: "url('/images/shapes-bg.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{
            top: 0,
            left: 0,
            position: "absolute",
            background: "rgba(255, 255, 255, 0.7)",
            height: "100%",
            width: "100%",
            zIndex: 1,
          }}
        ></div>

        <SegmentComponent
          left={<SegmentImage src="/images/header-1.jpeg" />}
          right={
            <Quote
              title="Mission Statement"
              message="At Kafanchan Municipal Authority, our mission is to enhance the quality of life for all residents of our municipality by providing efficient, transparent, and inclusive governance. We are dedicated to fostering sustainable development, promoting social equity, and preserving our cultural heritage."
              last="... Excellence, Integrity & Sustainability"
            />
          }
        />

        <SegmentComponent
          reverse
          left={
            <Quote
              title="Vision"
              message="Kafanchan Municipal Authority envisions a future where all residents have access to quality education, healthcare, and infrastructure. We believe that Kafanchan can be a model for sustainable development, and we are committed to working with our residents and stakeholders to make this vision a reality."
              last="... Responsive Governance, Sustainable Development & Inclusive Community"
            />
          }
          right={<SegmentImage src="/images/header-4.jpeg" />}
        />

        <SegmentComponent
          left={<SegmentImage src="/images/header-3.jpeg" />}
          right={
            <Quote
              title="Core Values"
              list={[
                "Commitment",
                "Loyalty",
                "Integrity",
                "Professionalism & Creativity",
                "Efficiency & Effectiveness",
                "Team Work",
              ]}
            />
          }
        />
      </div>

      <OfficeOfAdmin />

      <Footer />
    </>
  );
}
