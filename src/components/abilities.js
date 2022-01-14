import React from "react";

//icons
import { Icon } from "@iconify/react";
import codeSlash from "@iconify/icons-bi/code-slash";
import pencilIcon from "@iconify/icons-bi/pencil";

import colouredLogo from "../logo_coloured.png";

const Abilities = () => {
  return (
    <div className="skills-section">
      <div className="content-margin skill-margin">
        {/* App's */}
        <div className="skill-wrapper app-skill">
          <div className="skill-icon-wrapper app-icon-wrapper">
            <Icon icon={codeSlash} className="skill-icon code-icon" />
            <h3 className="skill-head">Apps</h3>
          </div>
          <div className="design-underline"></div>
          <div className="gratitude-desc">
            Grateful to be able to create apps that makes people feel good!
            Inspired by my childhood hero Bruce Wayne, I always envisioned
            myself sitting infront of the bat-computer, creating gadgets to
            uplift others.
          </div>
        </div>

        <img src={colouredLogo} alt="" className="coloured-logo" />

        {/* Website */}
        <div className="skill-wrapper">
          <div className="skill-icon-wrapper website-icon-wrapper">
            <Icon icon={pencilIcon} className="skill-icon pencil-icon" />
            <h3 className="skill-head">Websites</h3>
          </div>
          <div className="design-underline"></div>
          <div className="gratitude-desc">
            Oppurtunities to express my creativity. As design is the most
            important part of a website, learning web-design made me appreciate
            the amount of time and effort that is placed into designing the apps
            we use on a day-to-day basis.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abilities;
