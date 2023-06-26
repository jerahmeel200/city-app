import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import Banner from "../resusables/Banner/Banner";
import PageMessage from "../resusables/PageMessage";
import TeamMembers from "../resusables/TeamMembers/TeamMembers";

const membersMain = [
  {
    id: 1,
    name: "jonh lennon",
    position: "Chief Executive Officer",
    img: "https://media.istockphoto.com/id/1166468809/photo/portrait-of-a-male-athlete-at-the-gym.jpg?s=612x612&w=0&k=20&c=y2hKYbxCqMIwTzbkq9v6ViOnXYxXH2ao1inkISul2Dk=",
  },
];

const members = [
  {
    id: 1,
    name: "jonh lennon",
    position: "Chief Executive Officer",
    img: "https://media.istockphoto.com/id/1018647908/photo/african-american-man-resting-after-exercise-in-gym.jpg?s=612x612&w=0&k=20&c=jIzFu4iFnVNoi3pAUdH7q_2uiFodoZhwmjwzLX_bCqs=",
  },
  {
    id: 2,
    name: "James Maddision",
    position: "Chief Product Officer",
    img: "https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "James Maddision",
    position: "Chief Product Officer",
    img: "https://media.istockphoto.com/id/1166468809/photo/portrait-of-a-male-athlete-at-the-gym.jpg?s=612x612&w=0&k=20&c=y2hKYbxCqMIwTzbkq9v6ViOnXYxXH2ao1inkISul2Dk=",
  },
  {
    id: 4,
    name: "James Maddision",
    position: "Chief Product Officer",
    img: "https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },

  {
    id: 5,
    name: "James Maddision",
    position: "Chief Product Officer",
    img: "https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    name: "James Maddision",
    position: "Chief Product Officer",
    img: "https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },

  {
    id: 7,
    name: "James Maddision",
    position: "Chief Product Officer",
    img: "https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },

  {
    id: 8,
    name: "James Maddision",
    position: "Chief Product Officer",
    img: "https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 9,
    name: "James Maddision",
    position: "Chief Product Officer",
    img: "https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
export default function Team() {
  return (
    <>
      <Header />
      <Banner title="Our Team" />
      <PageMessage
        msg="At Kafanchan Municipal Authority, we take pride in the dedicated and
          passionate team that works tirelessly to serve the community of
          Kafanchan. Our team is composed of talented individuals from various
          fields, all committed to providing exceptional services and ensuring
          the welfare and progress of our municipality."
      />

      <TeamMembers members={membersMain} />
      <TeamMembers members={members} />
      <Footer />
    </>
  );
}
