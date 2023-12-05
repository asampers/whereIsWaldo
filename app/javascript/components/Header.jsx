import React from "react";
import { useFoundNames } from "./Context";

export const Header = ({characters}) => {
  const FoundNames = useFoundNames();
  const characterNames = characters.map((charac) => charac.name)
  
  let foundList = characterNames.map((name, i) => {
    let display = FoundNames.includes(name) ? 'visible' : 'hidden';
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