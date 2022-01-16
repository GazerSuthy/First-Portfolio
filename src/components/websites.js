import React from "react";
import { useState } from "react";

import powerofmusic from "../images/powerofmusic.png";
import turtlespeed from "../images/turtlespeed.png";

import data from "../websites_data";

import { Icon } from "@iconify/react";
import circleChevronLeftFill from "@iconify/icons-akar-icons/circle-chevron-left-fill";
import circleChevronRightFill from "@iconify/icons-akar-icons/circle-chevron-right-fill";

// website logos
import oogway from "../images/Master Oogway.png";
import luffy from "../images/luffy.png";
import squidward from "../images/squidward.png";
import ramen from "../images/ramen.png";

const Websites = ({ passedRef }) => {
  const [activeSite, setActiveSite] = useState(0);
  const [imgIndex, setImageIndex] = useState(0);

  return (
    <div className="websites-wrapper" ref={passedRef}>
      <div className="content-margin">
        <h1 className="websites-head">Websites</h1>
        <h3 className="websites-subhead">
          An investment that can accelerate the growth of a business. With each
          project I respect the client's trust in my ability to use my knowledge
          of{" "}
          <a
            href="https://www.interaction-design.org/literature/topics/accessibility"
            className="subhead-links"
          >
            user accessability,
          </a>{" "}
          <a
            href="https://en.wikipedia.org/wiki/Responsive_web_design"
            className="subhead-links"
          >
            responsive designs,
          </a>{" "}
          <a
            href="https://www.interaction-design.org/literature/topics/visual-hierarchy"
            className="subhead-links"
          >
            visual hiearchy,
          </a>{" "}
          and more web development techniques to produce their ideal website.
        </h3>
        <div className="page-style"></div>

        <div className="builds-container">
          <h3 className="my-builds">My builds</h3>
          <div className="website-icons-container">
            {activeSite === 0 ? (
              <div className="logo-container">
                <div className="icon-background active-site">
                  <img
                    src={oogway}
                    alt=""
                    className="oogway-logo website-logo"
                  />
                </div>
              </div>
            ) : (
              <div className="logo-container">
                <div
                  className="icon-background"
                  onClick={() => {
                    setActiveSite(0);
                    setImageIndex(0);
                  }}
                >
                  <img
                    src={oogway}
                    alt=""
                    className="oogway-logo website-logo"
                  />
                </div>
              </div>
            )}
            {activeSite === 1 ? (
              <div className="logo-container active-site">
                <div className="icon-background">
                  <img
                    src={squidward}
                    alt=""
                    className="squidward-logo website-logo"
                  />
                </div>
              </div>
            ) : (
              <div className="logo-container">
                <div
                  className="icon-background"
                  onClick={() => {
                    setActiveSite(1);
                    setImageIndex(0);
                  }}
                >
                  <img
                    src={squidward}
                    alt=""
                    className="squidward-logo website-logo"
                  />
                </div>
              </div>
            )}

            {activeSite === 2 ? (
              <div className="logo-container">
                <div className="icon-background active-site">
                  <img src={luffy} alt="" className="luffy-logo website-logo" />
                </div>
              </div>
            ) : (
              <div className="logo-container">
                <div
                  className="icon-background"
                  onClick={() => {
                    setActiveSite(2);
                    setImageIndex(0);
                  }}
                >
                  <img src={luffy} alt="" className="luffy-logo website-logo" />
                </div>
              </div>
            )}
            {activeSite === 3 ? (
              <div className="logo-container">
                <div className="icon-background active-site">
                  <img src={ramen} alt="" className="ramen-logo website-logo" />
                </div>
              </div>
            ) : (
              <div className="logo-container">
                <div
                  className="icon-background"
                  onClick={() => {
                    setActiveSite(3);
                    setImageIndex(0);
                  }}
                >
                  <img src={ramen} alt="" className="ramen-logo website-logo" />
                </div>
              </div>
            )}
          </div>
        </div>

        <DisplaySite
          site={data[activeSite]}
          imgIndex={imgIndex}
          setImageIndex={setImageIndex}
        ></DisplaySite>

        {/* website cards mobile */}
        <section className="card-container">
          <WebsiteCard
            cardimg={turtlespeed}
            title="Turtle Speed Renovation"
            cardtext={
              "My first client build which provided valuable experience in interacting with clients to create a business website that effectively sells their products and personal services. Seeing the clients face after the end results was priceless!"
            }
            link="https://www.mrturtlespeed.com"
          ></WebsiteCard>
          <WebsiteCard
            cardimg={powerofmusic}
            title="Power Of Music"
            cardtext={
              'If you pay attention to the top charted songs you will notice that the lyrics are designed to induce a destructive nature of thoughts, because repairing destruction results to profit. This website was designed and built by me to celebrate my awakening to the "trap music"'
            }
            link=""
          ></WebsiteCard>
        </section>
      </div>
    </div>
  );
};

const DisplaySite = ({ site, imgIndex, setImageIndex }) => {
  function nextImage() {
    console.log(site.imgs.length);
    if (imgIndex >= site.imgs.length - 1) {
      setImageIndex(0);
    } else {
      let newIndex = imgIndex + 1;
      setImageIndex(newIndex);
    }
  }

  function previousImage() {
    if (imgIndex <= 0) {
      let newIndex = site.imgs.length - 1;
      setImageIndex(newIndex);
    } else {
      let newIndex = imgIndex - 1;
      setImageIndex(newIndex);
    }
  }

  return (
    <section className="website-display-wrapper">
      {/* holds display */}
      <div className="display-wrapper">
        <div className="large-display-wrapper">
          <h1 className="website-title">{site.name}</h1>
          <img
            src={site.imgs[imgIndex]}
            alt="website created by GazerSuthy"
            className="large-display"
          />
          <div className="website-icons-wrapper">
            {site.visit_link !== "" ? (
              <div>
                <a href={site.visit_link} className="btn-text website-btn">
                  visit site
                </a>
                <Icon
                  icon={circleChevronLeftFill}
                  className="left-arrow-icon"
                  onClick={() => {
                    previousImage();
                  }}
                />
                <Icon
                  icon={circleChevronRightFill}
                  className="right-arrow-icon"
                  onClick={() => {
                    nextImage();
                  }}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className="display-text-wrapper">
        <p className="display-text">{site.description}</p>
      </div>
      {/* holds website icons */}
    </section>
  );
};

const WebsiteCard = ({ cardimg, title, cardtext, link }) => {
  return (
    <div className="website-card">
      <img src={cardimg} alt="website turtlespeed" className="card-img" />
      <div className="purple-underline"></div>
      <h6 className="website-title">{title}</h6>
      <p className="card-description">{cardtext}</p>
      {link !== "" ? (
        <a href={link} className="btn-text">
          visit site
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default Websites;
