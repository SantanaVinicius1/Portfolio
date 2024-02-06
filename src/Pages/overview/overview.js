import React, { useEffect } from "react";
import "./overview.scss";
import ReactFullpage from "@fullpage/react-fullpage";

import { Card, Introduction, Soft, Tech } from "./Components";

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
              <Introduction />
            </div>
            <div className="section skills">
              <Tech />
            </div>
            <div className="section" style={{ backgroundColor: "#fefefe" }}>
              <Soft />
            </div>
            <div class="section">
              <Card />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default Overview;
