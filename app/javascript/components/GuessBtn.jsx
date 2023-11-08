import React from "react";

export default GuessBtn = ({onClick, children}) => {
  return (
    <li className="dropdown-item"
      style={{cursor: "pointer"}}
      onClick={onClick}
    >
      {children}
    </li>
  )
}