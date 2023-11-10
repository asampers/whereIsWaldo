import React, { forwardRef } from "react";

export default GameImage = forwardRef(({onClick}, ref) => {
  return (
    <div className="gameImage container-fluid d-flex justify-content-center" ref={ref}>
      <img src="fullHeist.jpg" className="heistImg img-fluid"  onClick={(e) => onClick(e)}/>
    </div>
  )
})