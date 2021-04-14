import React, { useRef } from "react";

const useFullScreen = (callback) => {
  const element = useRef();
  const runCb = isFull => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  if (callback && typeof callback === "function") {
    callback(true);

    const triggerFull = () => {
      if (element.current) {
        if (element.current.requestFullscreen) {
          element.current.requestFullscreen();
        } else if (element.current.mozRequestFullScreen) {
          element.current.mozRequestFullscreen();
        } else if (element.current.mozRequestFullScreen) {
          element.current.webkitRequestFullscreen();
        } else if (element.current.mozRequestFullScreen) {
          element.current.msRequestFullscreen();
        }
        runCb(true);
      }
    }
    const exitFull = () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitRequestFullscreen) {
        document.webkitRequestFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      runCb(false);
    }
    return { element, triggerFull, exitFull };
  }
}

export const App = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  }

  const { element, triggerFull, exitFull } = useFullScreen(onFulls);
  return (
    <div>
      <div ref={element}>
        <img
          src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make FullScreen</button>
    </div>
  )
}