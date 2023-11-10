import React from "react";
import { Link } from "react-router-dom";

export default Header = () => {
  return (
    <div className="header container-fluid d-flex flex-column align-items-center justify-content-center">
      <img src="charactersBanner.jpg" className="header-img img-fluid"/>
      
      <div className="d-flex container-fluid checkMarks justify-content-around">
        <button type="button" className="btn btn-success" disabled><i className="bi bi-check-square-fill"></i></button>
        <button type="button" className="btn btn-success" disabled><i className="bi bi-check-square-fill"></i></button>
        <button type="button" className="btn btn-success" disabled><i className="bi bi-check-square-fill"></i></button>
        <button type="button" className="btn btn-success" disabled><i className="bi bi-check-square-fill"></i></button>
        <button type="button" className="btn btn-success" disabled><i className="bi bi-check-square-fill"></i></button>
      </div>
    </div>
  )
}