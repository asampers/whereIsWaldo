import React from "react";

export default GameImage = ({onClick}) => {
  return (
    <div className="gameImage container-fluid d-flex justify-content-center mb-5" >
      <img src="fullHeist.jpg" className="heistImg img-fluid" onClick={(e) => onClick(e)}/>
    </div>
  )
}