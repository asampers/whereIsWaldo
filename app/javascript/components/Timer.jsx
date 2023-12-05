import React, { useEffect, useState } from "react";
import { clockify } from "../utils/clockify";
import { getTimerStyle } from "../utils/timerHelper";

export const Timer = ({gameEnded, setFinalTime}) => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [isRunning, setIsRunning] = useState(true);

  const style = getTimerStyle();
  const ready = isRunning && startTime != null && now != null;

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
      className={ready ? "fixed-bottom timer" : "d-none" }
      style={style}
    >
      <span className="p-2 rounded">{clockify(timePassed)}</span>
    </div>
  );
}