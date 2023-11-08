import React, { useRef } from "react";
import Header from "./Header";
import GameImage from "./GameImage";
import Target from "./TargetBox";
import GuessBtn from "./GuessBtn";

export default Play = () => {
  const targetRef = useRef(null);

  const characters = ["Da Vinci", "Kahlo", "Picasso", "Van Gogh", "Warhol"]
  const characterList = characters.map((charac, i) => {
    return <GuessBtn key={i} onClick={() => handleTarget(charac)}>{charac}</GuessBtn>
  });

  const setTarget = (e) => {
    let x = e.pageX;
    let y = e.pageY
    console.log(`${x}x + ${y}y`)
    targetRef.current.style.display = 'flex';
    targetRef.current.style.left = x + 'px';
    targetRef.current.style.top = y + 'px';
  }

  const handleTarget = (name) => {
    targetRef.current.style.display = 'none';
    console.log(`You guessed ${name}`)
  }

  return (
    <>
      <Header />
      <GameImage onClick={setTarget} />
      <Target characters={characterList} ref={targetRef} />
    </>
  )
}