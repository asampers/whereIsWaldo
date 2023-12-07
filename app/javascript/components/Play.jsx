import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { GameBoard } from "./GameBoard";
import { Timer } from "./Timer";
import { EndScreen } from "./EndScreen";
import { Footer } from "./Footer";
import { FoundNamesProvider } from "./Context";
import { useNavigate } from "react-router-dom";

export const Play = () => {
  const navigate = useNavigate()
  const [gameEnded, setGameEnded] = useState(false)
  const [finalTime, setFinalTime] = useState(null)
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    const url = "/api/v1/characters/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setCharacters(res))
      .catch(() => navigate("/"));
  }, []);

  return (
    <>
      <FoundNamesProvider>
        {gameEnded && <EndScreen time={finalTime} startGame={() => setGameEnded(false)} />}
        <Header characters={characters}/>
        <GameBoard endGame={() => setGameEnded(true)} characters={characters}/>
      </FoundNamesProvider>  
      <Timer gameEnded={gameEnded} setFinalTime={setFinalTime}/>
      <Footer />
    </>
  )
}