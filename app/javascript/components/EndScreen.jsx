import React from "react";
import { clockify } from "../utils/clockify";
import HighScores from "./HighScores";
import { Link } from "react-router-dom";
import { useFoundNamesDispatch } from "./Context";

export default EndScreen = ({time, startGame}) => {
  const dispatch = useFoundNamesDispatch()

  function resetGame() {
    startGame();
    dispatch({type:'clearAll'})
  }


  return (
    <>
      <div className="modal endScreen" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden={time == null}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <h1 className="modal-title fs-5">You Did It!</h1>
            </div>
            <div className="modal-body">
              <p className="text-center">Your time was {clockify(time)}. </p>
              <HighScores time={time}/>
            </div>
            <div className="modal-footer justify-content-center">
              <button type="button" className="btn btn-sm btn-outline-success" onClick={() => resetGame()}>Play Again</button>
              <Link to="/" className="btn btn-sm btn-outline-secondary">Go Home</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}