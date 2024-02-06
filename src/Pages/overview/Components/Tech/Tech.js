import React from "react";
import { Bubble } from "../../../../Components";
import { ChildrenData } from "../../../../Helpers";
import { Texts } from "../../../../Assets/Texts";

const Tech = () => {
  return (
    <div>
      <div id="icons">
        <div id="bubbleContainer" className="bubbleContainer">
          <Bubble data={ChildrenData} />
        </div>
      </div>
      <div className="techskills_text-container">
        <span className="black-heading">{Texts.techHead}</span>
        <br />
        <span className="black-content">{Texts.techText}</span>
      </div>
    </div>
  );
};

export default Tech;
