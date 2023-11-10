import React from "react";
import { Link } from "react-router-dom";

export default Footer = () => {
  return (
    <div className="footer container-fluid d-flex justify-content-between mb-3">
      <a className="btn btn-sm btn-outline-dark" href="https://github.com/asampers/whereIsWaldo" target="_blank" rel="noopener noreferrer" title="github">
        <i className="bi bi-github"></i> Anna Sampers
      </a>
      <a className="btn btn-sm btn-outline-dark" href="https://github.com/asampers/whereIsWaldo" target="_blank" rel="noopener noreferrer" title="imgCredit">
        <i className="bi bi-card-image"></i> Image Credit
      </a>
    </div>
  )
}