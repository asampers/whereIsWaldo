import React, { forwardRef} from "react";

export default Target = forwardRef(({characters}, ref) => {
  return (
    <div className="guess" ref={ref}>
      <div className="targetBox"></div>
      <div className="guessBox dropdown">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Who is it?</a>
        <ul className="dropdown-menu">
          {characters}
        </ul>
      </div>
    </div>
  )
})