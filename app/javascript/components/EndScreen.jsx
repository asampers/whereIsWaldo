import React from "react";
import { clockify } from "../utils/clockify";
import { Link } from "react-router-dom";

export default EndScreen = ({ time, children }) => {


  return (
    <>
      <div className="modal endScreen" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden={time == null}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <h1 className="modal-title fs-5">You Did It!</h1>
            </div>
            <div className="modal-body">
              <span className="text-center">Your time was {clockify(time)}. </span>
              {children}
            </div>
            <div className="modal-footer justify-content-center">
              <button type="button" className="btn btn-sm btn-outline-success">Play Again</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Go Home</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}