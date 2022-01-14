import React from "react";

import resonatePic from "../images/resonate.png";

import { Icon } from "@iconify/react";
import reactFill from "@iconify/icons-akar-icons/react-fill";
import javascriptFill from "@iconify/icons-akar-icons/javascript-fill";
import htmlFill from "@iconify/icons-akar-icons/html-fill";
import cssFill from "@iconify/icons-akar-icons/css-fill";

const Resonate = ({ passedRef }) => {
  return (
    <div className="resonate-wrapper" ref={passedRef}>
      <div className="content-margin">
        <div className="content">
          <div className="head-wrapper">
            <h1 className="head-title">
              Resonate <span className="title-highlight">432hz</span>
            </h1>
            <h3 className="subhead">music web-player app</h3>
          </div>
          <div className="resonate-description-wrapper">
            <article className="resonate-description">
              <h1>Resonate's origin</h1>I created resonate after researching the
              healing benefits of the 432hz frequency and discovered the
              importance of listening to uplifting music in order to induce a
              constructive mindset.
              <br></br> <br></br>I was in the search for a free music playing
              app that could play my favorite songs tuned to 432hz, but the
              music apps were either terribly built or required a monthly
              prescription. That's when I decided to "Surpass My Limits" as Yami
              Sukehiro would say (one of my favorite anime characters) and build
              my own music web-app which promotes uplifting music tuned to 432hz
              along with anime openings. I had some experience in coding,
              however transitioning from coding a connect 4 game to an entire
              music app seemed like climbing mount everest. But here we are, and
              one thing for sure was that the journey was defenitely worth it!
            </article>
          </div>
          <div className="resonate-img-wrapper">
            <img
              src={resonatePic}
              alt="web-player in fullscreen mode"
              className="resonate-img"
            />
            {/* different pictures icons */}
            <div className="icons-container">
              <Icon icon={reactFill} className="ability-icon" />
              <Icon icon={javascriptFill} className="ability-icon" />
              <Icon icon={htmlFill} className="ability-icon" />
              <Icon icon={cssFill} className="ability-icon" />
            </div>
          </div>
          <div className="visit-webplayer-container">
            <a
              href="https://www.resonate432hz.com"
              className="visit-webplayer-btn"
            >
              Web Player
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resonate;
