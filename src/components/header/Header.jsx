import React, { useState, useEffect } from "react";
import "./header.css";
import { FiMenu } from "react-icons/fi";
import SocialIcons from "../../resusables/SocialIcons";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [showMobileNav, setShowMobileNav] = useState(false); // State variable to control the visibility of mobile nav

  const navData = [
    { link: "/", title: "Home" },
    { link: "/about-us", title: "About Us" },
    { link: "/our-team", title: "Our Team" },
    { link: "/our-mandate", title: "Our Mandate" },
  ];

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav); // Update the state variable to toggle mobile nav visibility
  };

  const [navbarBgColor, setNavbarBgColor] = useState(
    "rgba(255, 255, 255, 0.8)"
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = 64; // Adjust this value according to your navbar's height

      if (scrollPosition > navbarHeight) {
        setNavbarBgColor("rgba(255, 255, 255, 1)"); // Replace 'your-color' with the desired background color
      } else {
        setNavbarBgColor("rgba(255, 255, 255, 0.8)");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="header" style={{ backgroundColor: navbarBgColor }}>
      <div className="header__wrapper">
        <div className="header__left">
          <img src="/images/logo.png" />
        </div>

        <div className="header__center">
          {navData.map((item) => (
            <a
              href={item.link}
              style={{
                borderBottomColor:
                  location?.pathname === item?.link ? "#165788" : null,
              }}
              key={item?.title}
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className="header__right">
          {/* <button>i want to..</button> */}
          <SocialIcons color="#ec9f09" />
        </div>
      </div>

      <div className="mobile__wrapper">
        {showMobileNav && (
          <div className="mobile__nav">
            <div className="mobile__navCont">
              {navData.map((item) => (
                <a
                  href={item.link}
                  style={{
                    borderBottomColor:
                      location?.pathname === item?.link ? "#165788" : null,
                  }}
                  key={item?.title}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
        <div className="mobile__left">
          <img src="/images/logo.png" />
          <div className="top__wrapper">
            <SocialIcons color="#ec9f09" fontSize={14} width={30} rss={false} />

            <button onClick={toggleMobileNav} className="snack">
              {showMobileNav ? (
                <span style={{ fontWeight: 500, fontSize: "20px" }}>X</span>
              ) : (
                <FiMenu />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
