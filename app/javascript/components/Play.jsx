import React, { useRef, useState } from "react";
import Header from "./Header";
import GameBoard from "./GameBoard";
import Timer from "./Timer";
import EndScreen from "./EndScreen";
import HighScores from "./HighScores";
import Footer from "./Footer";
import { FoundNamesProvider, useFoundNamesDispatch } from "./Context";

export default Play = () => {
  const [gameEnded, setGameEnded] = useState(false)
  const [finalTime, setFinalTime] = useState(null)
  
  return (
    <>
      <FoundNamesProvider>
        {gameEnded && <EndScreen time={finalTime} startGame={() => setGameEnded(false)} />}
        <Header />
        <GameBoard endGame={() => setGameEnded(true)}/>
      </FoundNamesProvider>  
      <Timer  gameEnded={gameEnded} setFinalTime={setFinalTime}/>
      <Footer />
      
    </>
  )
}