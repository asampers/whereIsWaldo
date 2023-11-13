import React from "react";
import { Link } from "react-router-dom";
import { useCharacterNames, useFoundNames } from "./Context";

export default Header = () => {
  const FoundNames = useFoundNames();
  const CharacterNames = useCharacterNames()
  
  let foundList = CharacterNames.map((name, i) => {
    let display = FoundNames.includes(name) ? 'visible' : 'hidden'
    return <button key={i} type="button" style={{visibility: display}} className="btn btn-success" disabled><i className="bi bi-check-square-fill"></i></button>
  });

  return (
    <div className="header container-fluid d-flex flex-column align-items-center justify-content-center">
      <img src="charactersBanner.jpg" className="header-img img-fluid"/> 
      <div className="d-flex container-fluid checkMarks justify-content-around">
        {foundList}
      </div>
    </div>
  )
}