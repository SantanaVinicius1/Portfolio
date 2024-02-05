import React, { useEffect, useRef } from "react";
import "./windowComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMinimize, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

const Window = (props) => {
  const frame = useRef(null);
  const content = useRef(null);
  const firstUpdate = useRef(true);

  useEffect(() => {
    handleMaximization();
  }, [props.maximized]);

  const handleMaximization = () => {
    let time = 0;
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      frame.current.classList.remove("invisible");
      content.current.classList.remove("invisible");

      if (props.maximized) {
        frame.current.classList.add("maximized");
        frame.current.classList.remove("minimized");
        time = 250;
      } else {
        frame.current.classList.add("minimized");
        frame.current.classList.remove("maximized");
        time = 20;
      }
    }

    setTimeout(() => {
      content.current.classList.toggle("frame-content_minimized");
    }, time);
  };

  return (
    <>
      <div ref={frame} className="frame invisible window-outside">
        <div ref={content} className="invisible">
          <div className="header">
            <div
              style={{
                paddingTop: "10px",
                width: "100%",
                display: "inline-block",
              }}
            >
              Notepad - Super safe pass tip
            </div>
            <div className="icons">
              <div className="iconsContent">
                <span className="spacer-l-30" />
                <FontAwesomeIcon
                  icon={faWindowMinimize}
                  size="sm"
                  onClick={() => {
                    props.setMaximized(false);
                  }}
                />
                <span className="spacer-l-15" />
                <FontAwesomeIcon icon={faSquare} size="sm" />
                <span className="spacer-l-12" />
                <FontAwesomeIcon
                  icon={faXmark}
                  size="sm"
                  onClick={() => {
                    props.setMaximized(false);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="options">
            <span className="options-text">File</span>
            <span className="options-text">Actions</span>
            <span className="options-text">Edit</span>
            <span className="options-text">View</span>
            <span className="options-text">Help</span>
          </div>
          <div className="sub-frame">
            <span style={{ color: "#232a35", marginLeft: "50px" }}>
              The key is in the dog's collar
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Window;
