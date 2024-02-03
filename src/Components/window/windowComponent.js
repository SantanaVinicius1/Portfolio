import React, { useEffect, useRef } from "react";
import "./windowComponent.scss";

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
      <div ref={frame} className="frame invisible">
        <div ref={content} className="invisible">
          <div
            style={{
              width: "300px",
              height: "300px",
              margin: "auto",
              backgroundColor: "blue",
              marginTop: "20%",
            }}
          >
            aaaa
          </div>
        </div>
      </div>
    </>
  );
};

export default Window;
