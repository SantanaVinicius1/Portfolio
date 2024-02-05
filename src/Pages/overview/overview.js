import React, { useEffect } from "react";
import "./overview.scss";
import {
  emailIcon,
  githubIcon,
  linkedinIcon,
  myicon,
  myicon2,
} from "../../Assets/images";
import { Bubble } from "../../Components";
import { ChildrenData } from "../../Helpers";
import ReactFullpage from "@fullpage/react-fullpage";
import { Texts } from "../../Assets/Texts";
import { Icons } from "../../Assets/icons";

function Overview() {
  useEffect(() => {
    document
      .getElementsByClassName("_2MD0k")[0]
      .addEventListener("mousemove", (event) => {
        handleMove(event);
      });

    document.getElementsByClassName("fp-watermark")[0].style.display = "none";
  }, []);

  var x, y;
  const handleMove = (e) => {
    // Verify that x and y already have some value
    if (x && y) {
      // Scroll window by difference between current and previous positions
      document.getElementsByClassName("_2MD0k")[0].scrollBy({
        top: e.clientY - y,
        left: e.clientX - x,
        behavior: "auto",
      });
    }

    // Store current position
    x = e.clientX;
    y = e.clientY;
  };

  return (
    <ReactFullpage
      //fullpage options
      scrollingSpeed={1000} /* Options here */
      scrollHorizontally={true} /* Because we are using the extension */
      navigation={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section introduction">
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
            </div>
            <div className="section skills">
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
            </div>
            <div className="section" style={{ backgroundColor: "#fefefe" }}>
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
            </div>
            <div class="section">
              <div>
                <div id="card" className="card">
                  <div style={{ marginTop: "85px" }}>
                    <span className="card-white-heading">
                      Here, take my card
                    </span>
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
                    <span className="card-name-subheading">
                      Software Engineer
                    </span>
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
                          window.location.href =
                            "https://github.com/santanavinicius1";
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
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default Overview;
