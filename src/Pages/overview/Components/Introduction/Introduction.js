import React from "react";
import { Texts } from "../../../../Assets/Texts";
import { myicon } from "../../../../Assets/images";

const Introduction = () => {
  return (
    <div id="introduction">
      <div className="heading-container">
        <span className="white-heading">{Texts.greetings}</span>
        <br />
        <span className="purple-heading">
          SOFTWARE
          <br /> ENGINEER
        </span>
      </div>
      <div className="sub_heading-container">
        <span className="white-heading">{Texts.yotta}</span>
        <br />
        <span className="white-content">{Texts.intro}</span>
      </div>

      <div className="my_icon-container">
        <img src={myicon} className="my_icon" />
      </div>
    </div>
  );
};

export default Introduction;
