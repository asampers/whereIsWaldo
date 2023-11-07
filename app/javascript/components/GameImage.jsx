import React from "react";

export default GameImage = ({onClick}) => {
  return (
    <img src="fullHeist.jpg" className="img-fluid" onClick={(e) => onClick(e)}/>
  )
}