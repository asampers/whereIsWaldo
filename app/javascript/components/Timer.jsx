import React, { useEffect, useState, useRef } from "react";
import { clockify } from "../utils/clockify";

export default Timer = ({gameEnded, setFinalTime}) => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [isRunning, setIsRunning] = useState(true);
  
  let heightDifference = window.innerHeight - window.document.body.offsetHeight;
  let style = {marginBottom: `${heightDifference > 0 ? heightDifference : 20}px`}

  useEffect(() => {
    if (gameEnded) {
      setFinalTime(timePassed);
      setIsRunning(false)
    } else {
      setStartTime(Date.now());
      setIsRunning(true);
    }
  }, [gameEnded]);

  useEffect(() => {
    let intervalId;
    
    if (isRunning) {
      intervalId = setInterval(() => {
        setNow(Date.now());
      }, 10);
    } else {
      setStartTime(null);
      setNow(null);
    }

    return () => {clearInterval(intervalId)};
  }, [isRunning]);

  let timePassed = now - startTime;
 
  return (
    <div
      className={isRunning && startTime != null ? "fixed-bottom timer" : "d-none" }
      style={style}
    >
      <span className="p-2 bg-info rounded">{clockify(timePassed)}</span>
    </div>
  );
}