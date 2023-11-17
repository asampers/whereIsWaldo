import React, { useRef, useState } from "react";
import Header from "./Header";
import GameBoard from "./GameBoard";
import Timer from "./Timer";
import EndScreen from "./EndScreen";
import Footer from "./Footer";
import { FoundNamesProvider } from "./Context";

export default Play = () => {
  const [gameEnded, setGameEnded] = useState(false)
  const [finalTime, setFinalTime] = useState(null)
  
  return (
    <>
      {gameEnded && <EndScreen time={finalTime} />}
      <FoundNamesProvider>
        <Header />
        <GameBoard endGame={() => setGameEnded(true)}/>
      </FoundNamesProvider>  
      <Timer  gameEnded={gameEnded} setFinalTime={setFinalTime}/>
      <Footer />
      
    </>
  )
}