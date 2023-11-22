import React from "react";

export default Footer = () => {
  return (
    <div className="footer container d-flex justify-content-between mb-3">
      <a className="btn btn-sm btn-outline-dark" href="https://github.com/asampers/whereIsWaldo" target="_blank" rel="noopener noreferrer" title="github">
        <i className="bi bi-github"></i> Anna Sampers
      </a>
      <a style={{zIndex: "1032"}} className="btn btn-sm btn-outline-dark" href="https://elijahhaswell.myportfolio.com/the-heist" target="_blank" rel="noopener noreferrer" title="imgCredit">
        <i className="bi bi-card-image"></i> Image Credit
      </a>
    </div>
  )
}