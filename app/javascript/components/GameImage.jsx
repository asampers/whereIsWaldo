import React from "react";

export default GameImage = ({onClick}) => {
  return (
    <div className="container">
      <img src="fullHeist.jpg" className="img-fluid" onClick={(e) => onClick(e)}/>
    </div>
  )
}