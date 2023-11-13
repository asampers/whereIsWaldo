import React from "react";

export default AlertOutcome = ({found, styled}) => {
  let alertType = found ? 'alert-success' : 'alert-danger'
  let message = found ? `You found ${found}` : 'Ope, try again!'
  let style = {position: 'absolute', left:styled.x + 'px', top:styled.y + 'px'}
  
  return (
    <div style={style} className={`alert-container alert ${alertType}`} role="alert" >
      <div className='alert-inner'>{message}</div>
    </div>
  )
}