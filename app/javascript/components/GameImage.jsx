import React from "react";

export default GameImage = ({onClick}) => {
  return (
    <div className="gameImage container-fluid d-flex justify-content-center mt-3 mb-4" >
      <img src="fullHeist.jpg" className="heistImg img-fluid" onClick={(e) => onClick(e)}/>
    </div>
  )
}