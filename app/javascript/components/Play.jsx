import React, { useRef } from "react";
import Header from "./Header";
import GameImage from "./GameImage";
import TargetBox from "./TargetBox";
import GuessBtn from "./GuessBtn";

export default Play = () => {
  const targetRef = useRef(null);

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
      <TargetBox ref={targetRef}>
        <div className="targetBox"></div>
        <div className="guessBox dropdown">
          <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Who is it?</a>
          <ul className="dropdown-menu">
            <GuessBtn onClick={() => handleTarget("Da Vinci")}>Da Vinci</GuessBtn>
            <GuessBtn onClick={() => handleTarget("Kahlo")}>Kahlo</GuessBtn>
            <GuessBtn onClick={() => handleTarget("Picasso")}>Picasso</GuessBtn>
            <GuessBtn onClick={() => handleTarget("Van Gogh")}>Van Gogh</GuessBtn>
            <GuessBtn onClick={() => handleTarget("Warhol")}>Warhol</GuessBtn>
          </ul>
        </div>
      </TargetBox>
    </>
  )
}