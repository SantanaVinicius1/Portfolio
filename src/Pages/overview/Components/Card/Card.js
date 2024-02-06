import React from "react";
import { emailIcon, githubIcon, linkedinIcon } from "../../../../Assets/images";

const Card = () => {
  return (
    <div>
      <div id="card" className="card">
        <div style={{ marginTop: "85px" }}>
          <span className="card-white-heading">Here, take my card</span>
          <br />
          <span className="card-purple-heading">
            LET'S
            <br />
            &nbsp; CONNECT!
          </span>
        </div>
        <div
          style={{
            backgroundColor: "#ECEBF1",
            width: "399px",
            position: "relative",
            height: "531.7px",
            float: "right",
            marginTop: "-338.4px",
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
          }}
        >
          <span className="card-name-heading"> Vinicius Santana</span>
          <span className="card-name-subheading">Software Engineer</span>
          <hr className="card-line" />
          <div className="icon-card-container">
            <div
              className="card-links"
              onClick={() => {
                window.location.href =
                  "https://linkedin.com/in/santanvinicius2";
              }}
            >
              <img src={linkedinIcon} className="card-icons" />
              Linkedin.com/in/santanavinicius2
            </div>
            <br />
            <div
              className="card-links"
              onClick={() => {
                window.location.href = "https://github.com/santanavinicius1";
              }}
            >
              <img src={githubIcon} className="card-icons" />
              github.com/santanavinicius1
            </div>
            <br />
            <div
              className="card-links"
              onClick={() => {
                window.location.href =
                  "mailto:santanavinicius097@gmail.com?subject=Nice Portfolio, Let's Connect!&body=Type%20your%20message%20here";
              }}
            >
              <img src={emailIcon} className="card-icons" />
              santanavinicius097@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
