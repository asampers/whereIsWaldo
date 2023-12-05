import React from "react";
import { getAlertStyling } from "../utils/alertOutcomeHelper";

export const AlertOutcome = ({found, styled}) => {
  const { alertType, message, display, style } = getAlertStyling(found, styled)
  
  return (
    <div style={style} className={`alert-container alert ${alertType} ${display}`} role="alert" >
      <div className='alert-inner'>{message}</div>
    </div>
  )
}