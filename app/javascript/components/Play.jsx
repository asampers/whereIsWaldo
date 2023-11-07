import React, { useRef } from "react";
import Header from "./Header";
import GameImage from "./GameImage";
import TargetBox from "./TargetBox";

export default Play = () => {
  const targetRef = useRef(null);
  const imageClick = (e) => {
    let x = e.pageX;
    let y = e.pageY
    console.log(`${x}x + ${y}y`)
    targetRef.current.style.display = 'flex';
    targetRef.current.style.left = x + 'px';
    targetRef.current.style.top = y + 'px';
  }

  return (
    <>
      <Header />
      <GameImage 
        onClick={imageClick}
      />
      <TargetBox ref={targetRef}/>
    </>
  )
}