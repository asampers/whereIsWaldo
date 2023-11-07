import React from "react";
import { Link } from "react-router-dom";

export default Home = () => {
  return (
    <div className="container-fluid">
      <h1>Find the Famous Artist
        <span className="h4 text-body-secondary"> A Where's Waldo game</span>
      </h1>
      
      <h3>How to Play</h3>
      <p>Find all the characters as fast as you can.</p>
      <Link to="/play" className="btn btn-outline-dark">
        Start Game!
      </Link>
    </div>
  )
}