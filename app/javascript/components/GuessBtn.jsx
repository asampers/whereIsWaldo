import React from "react";

export default GuessBtn = ({onClick, children}) => {
  return (
    <li className="btn btn-link btn-sm"
      onClick={onClick}
    >
      {children}
    </li>
  )
}