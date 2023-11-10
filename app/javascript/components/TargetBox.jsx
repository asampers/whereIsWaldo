import React from "react";

export default Target = ({children, styled, onClick}) => {
  let style = {left:styled.x + 'px', top:styled.y + 'px', display: styled.show ? 'flex' : 'none'}
  return (
    <div style={style} className="guess" >
      <div className="targetBox" onClick={() => onClick()}></div>
      <div className="guessBox dropdown">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Who is it?</a>
        <ul className="dropdown-menu">
          {children}
        </ul>
      </div>
    </div>
  )
}