import React, { useEffect, useState } from "react";
import { Terminal } from "../../Components";
import "./mainPage.scss";
import { documenticon, foldericon } from "../../Assets/images";
import { useNavigate } from "react-router-dom";
import { Window } from "../../Components";

const MainPage = () => {
  let time = new Date().toLocaleTimeString();
  let date = new Date();
  const navigate = useNavigate();

  const [ctime, setTime] = useState(time);
  const [day, setDay] = useState("");
  const [maximized, setMaximized] = useState(false);
  const [discovered, setDiscovered] = useState(false);

  const [rangeValue, setRangeValue] = useState(0);

  useEffect(() => {
    var day = ("0" + (new Date().getDay() + 1)).slice(-2);
    var month = new Date().toLocaleString("default", { month: "short" });

    setDay(month + " " + day);
  }, []);

  const UpdateDiscovered = (value) => {
    setDiscovered(value);
  };

  const UpdateMaximized = (value) => {
    setMaximized(value);
  };

  const UpdateTime = () => {
    var t = new Date();

    t.setHours(t.getHours() % 24);

    time = t.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });

    setTime(time);
  };
  setInterval(UpdateTime);

  return (
    <div className="back-container">
      <div className="top-bar">
        <a href="https://mrrobot.fandom.com/wiki/E_Corp" className="e-logo">
          E
        </a>
        <div
          style={{
            marginLeft: "70px",
            color: "white",
            fontSize: "12px",
            position: "relative",
            display: "inline-block",
            fontWeight: "semmibold",
            top: "-3.5px",
          }}
        >
          Applications &nbsp;&nbsp;&nbsp;&nbsp; Files &nbsp;&nbsp;&nbsp;&nbsp;
          Media &nbsp;&nbsp;&nbsp;&nbsp; Explorer
        </div>
        <div
          style={{
            left: "28%",
            color: "white",
            fontSize: "12px",
            position: "relative",
            display: "inline-block",
            fontWeight: "semmibold",
            top: "-3.5px",
          }}
          id="clock"
        >
          {day}&nbsp;&nbsp;&nbsp;{ctime}
        </div>
      </div>

      <div
        onClick={() => {
          if (!discovered) {
            alert("You don't have permission to access this folder");
          } else {
            window.location.href =
              "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
          }
        }}
        style={{
          position: "absolute",
          top: "60px",
          left: "30px",
          width: "60px",
          height: "60px",
          cursor: "pointer",
        }}
      >
        <img src={foldericon} style={{ width: "60px", height: "60px" }} />
        <span
          style={{
            color: "white",
            fontSize: "12px",
            position: "relative",
            fontWeight: "semmibold",
            top: "-15px",
            left: "11px",
          }}
        >
          Secrets
        </span>
      </div>
      <div
        onClick={() => {
          navigate("/overview");
        }}
        style={{
          position: "absolute",
          top: "150px",
          left: "30px",
          width: "60px",
          height: "60px",
          cursor: "pointer",
        }}
      >
        <img src={foldericon} style={{ width: "60px", height: "60px" }} />
        <span
          style={{
            color: "white",
            fontSize: "12px",
            position: "relative",
            fontWeight: "semmibold",
            top: "-15px",
            left: "6px",
          }}
        >
          Overview
        </span>
      </div>
      <div
        onClick={() => {
          setMaximized(!maximized);
        }}
        style={{
          position: "absolute",
          top: "600px",
          left: "30px",
          width: "60px",
          height: "60px",
          cursor: "pointer",
        }}
      >
        <img src={documenticon} style={{ width: "60px", height: "60px" }} />
        <span
          style={{
            color: "white",
            fontSize: "12px",
            position: "relative",
            fontWeight: "semmibold",
            top: "-6px",
            left: "5px",
          }}
        >
          Super safe <br /> pass tip
        </span>
      </div>
      <Terminal setDiscovered={UpdateDiscovered} discovered={discovered} />
      <Window maximized={maximized} setMaximized={UpdateMaximized} />
    </div>
  );
};

export default MainPage;
