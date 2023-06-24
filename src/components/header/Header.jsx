import React, { useState } from "react";
import "./header.css";
import { FiMenu } from "react-icons/fi";
function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false); // State variable to control the visibility of mobile nav

  const navData = [
    { title: "About Us" },
    { title: "Our Team" },
    { title: "Our Mandate" },
  ];

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav); // Update the state variable to toggle mobile nav visibility
  };

  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__left">
          <img src="/images/logo.png" />
        </div>

        <div className="header__center">
          {navData.map((item) => (
            <a href="#">{item.title}</a>
          ))}
        </div>

        <div className="header__right">
          <button>i want to..</button>
        </div>
      </div>

      <div className="mobile__wrapper">
        {showMobileNav && (
          <div className="mobile__nav">
            <ul className="mobile__navCont">
              {navData.map((item) => (
                <li key={item.title}>{item.title}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="mobile__left">
          <h1 style={{ display: "flex", alignItems: "center" }}>LOGO</h1>
          <div className="top__wrapper">
            <button className="want__mobile">i want to ..</button>
            <button onClick={toggleMobileNav} className="snack">
              {showMobileNav ? (
                <span style={{ fontWeight: 500, fontSize: "20px" }}>X</span>
              ) : (
                <FiMenu />
              )}
            </button>
          </div>
        </div>
        <div className="mobile__right">
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}

export default Header;
