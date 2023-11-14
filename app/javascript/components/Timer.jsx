import React, { useEffect, useState, useRef } from "react";
import { clockify } from "../utils/clockify";

export default Timer = ({gameEnded, setFinalTime}) => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [isRunning, setIsRunning] = useState(true);
  
  useEffect(() => {
    if (gameEnded) {
      setFinalTime(timePassed);
      setIsRunning(false)
      console.log(timePassed)
    } else {
      setStartTime(Date.now())
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

  const timePassed = now - startTime;
 
  return (
    <div
      className={isRunning ? "fixed-bottom timer" : "d-none" }
    >
      <span className="p-2 bg-info rounded">{clockify(timePassed)}</span>
    </div>
  );
}