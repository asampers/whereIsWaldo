import React, { useRef, useState } from "react";
import Header from "./Header";
import GameImage from "./GameImage";
import Target from "./TargetBox";
import GuessBtn from "./GuessBtn";
import GameBoard from "./GameBoard";

export default Play = () => {
  return (
    <>
      <Header />
      <GameBoard />
    </>
  )
}