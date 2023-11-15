import React, {useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import { useCharacterNames, useFoundNames } from "./Context";

export default Header = () => {
  const FoundNames = useFoundNames();
  const CharacterNames = useCharacterNames()

  let foundList = CharacterNames.map((name, i) => {
    let display = FoundNames.includes(name) ? 'visible' : 'visible'
    return <span key={i} style={{visibility: display}} className="found rounded">Found</span>
  });
  
  return (
    <div className="header container-fluid d-flex flex-column align-items-center justify-content-center">
      <img style={{zIndex:"-1"}} src="charactersBanner.jpg" className="header-img img-fluid"/> 
      <div className="d-flex container-fluid checkMarks justify-content-around">
        {foundList}
      </div>
    </div>
  )
}