import React from "react";
import { clockify } from "../utils/clockify";

export default HighScores = () => {
  return (
    <div className="highScores container mt-3 mb-3">
    <table className="table table-sm">
      <thead className="table-dark">
        <tr>
          <th colSpan="12" className="text-center">High Scores</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        <tr>
          <th scope="row">1.</th>
          <td>Mark</td>
          <td>00:01:00</td>
        </tr>
        <tr>
          <th scope="row">2.</th>
          <td>Jacob</td>
          <td>00:07:00</td>
        </tr>
        <tr>
          <th scope="row">3.</th>
          <td >Larry the Bird</td>
          <td >00:08:00</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}