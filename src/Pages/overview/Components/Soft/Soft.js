import React from "react";
import { Texts } from "../../../../Assets/Texts";
import { Icons } from "../../../../Assets/icons";
import { myicon2 } from "../../../../Assets/images";

const Soft = () => {
  return (
    <div
      className="softskills_text-container"
      style={{
        margin: "auto",
        width: "880px",
        height: "600px",
        float: "justify",
        textAlign: "center",
      }}
    >
      <span className="black-heading">{Texts.softHead}</span>
      <br />
      <div style={{ textAlign: "justify" }}>
        <span className="black-content">{Texts.softText}</span>
      </div>
      <div>
        <div
          style={{
            borderTopLeftRadius: "400px",
            borderTopRightRadius: "400px",
            borderLeft: "1px solid white",
            borderRight: "1px solid white",
            borderTop: "1px solid white",
            width: "600px",
            height: "320px",
            margin: "auto",
            marginTop: "100px",
          }}
        >
          <div className="circle">
            <img
              src={Icons.TeamPlayer}
              style={{ width: "50px", height: "50px" }}
            />
            <div className="circle-child">Team Player</div>
          </div>
          <div class="circle">
            <img
              src={Icons.Resilient}
              style={{ width: "50px", height: "50px" }}
            />
            <div className="circle-child">Resilient</div>
          </div>
          <div class="circle">
            <img
              src={Icons.Analytical}
              style={{ width: "50px", height: "50px" }}
            />
            <div className="circle-child">Analytical Thinker</div>
          </div>
          <div class="circle">
            <img
              src={Icons.Creative}
              style={{ width: "50px", height: "50px" }}
            />
            <div className="circle-child">Creative</div>
          </div>
          <div className="circle">
            <img
              src={Icons.Problem}
              style={{ width: "50px", height: "50px" }}
            />
            <div className="circle-child">Problem Solver</div>
          </div>
          <img
            src={myicon2}
            style={{
              width: "300px",
              height: "300px",
              marginTop: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Soft;
