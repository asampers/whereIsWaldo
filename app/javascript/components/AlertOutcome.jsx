import React from "react";

export default AlertOutcome = ({found, styled}) => {
  let alertType = found.name ? 'alert-success' : 'alert-danger'
  let message = found.name ? `You found ${found.name}` : 'Ope, try again!'
  let display = !found.visible ? 'd-none' : ""
  let style = {position: 'absolute', left:styled.x + 'px', top:styled.y + 'px'}
  
  return (
    <div style={style} className={`alert-container alert ${alertType} ${display}`} role="alert" >
      <div className='alert-inner'>{message}</div>
    </div>
  )
}