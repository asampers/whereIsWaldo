import React from "react";
import { Link } from "react-router-dom";
import HighScores from "./HighScores";
import Footer from "./Footer";
import EndScreen from "./EndScreen";
export default Home = () => {
  return (
    <>
    <div className="container d-flex flex-column align-items-center">
      <h1>Find the Famous Artist</h1>
      <h2 className="text-body-secondary"> A Where's Waldo game</h2>
      <img src="charactersBanner.jpg" className="header-img img-fluid"/> 
      <h3>How to Play</h3>
      <p>Click on the image to make your guess.</p>
      <img src="demoGuess.gif" className="img-fluid rounded demoImg"/>
      <p>Find all the characters as fast as you can.</p>
      <Link to="/play" className="btn btn-outline-dark">
        Start Game!
      </Link>
      {/*<HighScores />*/}
      <Footer />
    </div>
    </>
  )
}