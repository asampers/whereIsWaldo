import React, {useRef} from "react";

export const Target = ({children, styled, onClick}) => {
  let dropdown = useRef()
  let style = {left:styled.x + 'px', top:styled.y + 'px', display: styled.show ? 'flex' : 'none'}
  if (dropdown.current)dropdown.current.scrollIntoView({ behavior: "instant", block: "nearest", inline:"nearest"})
  return (
    <div style={style} className="guess" >
      <div className="targetBox" onClick={() => onClick()}></div>
      <div className="guessBox dropdown">
        <button ref={dropdown} className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Who is it?</button>
        <ul className="dropdown-menu">
          {children}
        </ul>
      </div>
    </div>
  )
}