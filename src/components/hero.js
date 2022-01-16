import React from "react";

// images
import GazerSuthyPic from "../images/suthy.png";
import sunset from "../images/sunset.png";

// icons
import { Icon } from "@iconify/react";
import mail16Regular from "@iconify/icons-fluent/mail-16-regular";
// import githubFill from "@iconify/icons-akar-icons/github-fill";
import instagramFilled from "@iconify/icons-ant-design/instagram-filled";
// import facebookFill from "@iconify/icons-akar-icons/facebook-fill";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="content-wrapper">
        <img src={sunset} alt="aesthehic sunset" className="hero-background" />
        <img
          src={sunset}
          alt="aesthehic sunset"
          className="hero-background backdrop-image"
        />
        <div className="margin-container hero-container">
          {/* profile pic */}
          <div className="profile-wrapper">
            <img
              src={GazerSuthyPic}
              alt="GazerSuthy dressed to the part!"
              className="profile-img"
            />
          </div>

          {/* socials */}
          <section className="social-wrapper">
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

          {/* abilities */}

          <section className="abilities-wrapper">
            <h4 className="abilities-head">
              Rise To Your Greatest Value With The Support Of My Creations
            </h4>
            {/* <div className="occupation-title">
              Front-End Developer | Ui designer
            </div> */}
            <p className="ability-text">
              "There are levels to this shit!" - Ralph Smart
            </p>
          </section>

          {/* email */}
          <div className="email-wrapper">
            <Icon icon={mail16Regular} className="email-icon" />
            <h6 className="email">GazerSuthy@outlook.com</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 
<Icon icon={reactFill} /> 
<Icon icon={javascriptFill}/>
<Icon icon={htmlFill} />
<Icon icon={cssFill} />
<Icon icon={mail16Regular}/>




*/

export default Hero;
