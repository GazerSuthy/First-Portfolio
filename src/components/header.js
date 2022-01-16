import React from "react";

import { Icon } from "@iconify/react";
// import githubFill from "@iconify/icons-akar-icons/github-fill";
import instagramFilled from "@iconify/icons-ant-design/instagram-filled";
// import facebookFill from "@iconify/icons-akar-icons/facebook-fill";
import logo from "../gazersuthy_logo.png";

const Header = ({ setScrollTo }) => {
  return (
    <div className="header-wrapper">
      <div className="margin-container header-margin content-margin">
        {/* Gazer Suthy logo */}
        <div
          className="logo-wrapper"
          onClick={() => {
            setScrollTo("home");
          }}
        >
          <img src={logo} alt="Not found" className="header-logo" />
          <h1 className="logo-text">GazerSuthy</h1>
        </div>

        {/* navigation */}
        <nav className="site-nav">
          <ul>
            <li className="nav-link-wrapper">
              <div
                className="nav-link"
                onClick={() => {
                  setScrollTo("apps");
                }}
              >
                Apps
              </div>
            </li>
            <li className="nav-link-wrapper">
              <div
                className="nav-link website-link"
                onClick={() => {
                  setScrollTo("websites");
                }}
              >
                Websites
              </div>
            </li>
          </ul>
        </nav>

        <section className="social-wrapper header-social">
          {/* <Icon icon={githubFill} className="social-icon github-icon" /> */}
          <a
            href="https://www.instagram.com/gazersuthy/"
            className="social-link"
          >
            <Icon
              icon={instagramFilled}
              className="social-icon instagram-icon"
            />
          </a>
          {/* <Icon icon={facebookFill} className="social-icon facebook-icon" /> */}
        </section>

        {/* mobile navigation */}
        {/* <div className="burgericon-wrapper">
          <Icon icon={hamburgerButton} className="burger-icon" />
        </div>
        <div className="mobile-nav">
          <nav className="mob-site-nav">
            <ul>
              <li className="mob-nav-link-wrapper">
                <a href="#" className="mob-nav-link">
                  About
                </a>
              </li>
              <li className="mob-nav-link-wrapper">
                <a href="#" className="mob-nav-link">
                  Project
                </a>
              </li>
              <li className="mob-nav-link-wrapper">
                <a href="#" className="mob-nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
