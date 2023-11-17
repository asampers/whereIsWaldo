import React from "react";
import { Link } from "react-router-dom";
import EndScreen from "./EndScreen";
import HighScores from "./HighScores";
import Footer from "./Footer";

export default Home = () => {
  return (
    <>
    {/*<EndScreen time={2222222} />*/}
    <div className="container d-flex flex-column align-items-center">
      <h1>Find the Famous Artist</h1>
      <h2 className="text-body-secondary"> A Where's Waldo game</h2>
      <img src="charactersBanner.jpg" className="header-img img-fluid"/> 
      <h3>How to Play</h3>
      <p>Click on the image to make your guess.</p>
      <img src="demoGuess.gif" className="img-fluid rounded demoImg"/>
      <p>Find all the characters as fast as you can.</p>
      <Link to="/play" className="btn btn-outline-dark mb-3">
        Start Game!
      </Link>
        <p className="text-center mb-0">Can you beat these scores?</p>
        <HighScores />

      <Footer />
    </div>
    
    </>
  )
}