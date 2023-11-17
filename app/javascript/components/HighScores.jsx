import React from "react";
import { clockify } from "../utils/clockify";

export default HighScores = () => {
  const topTen = [{name: "Mark", time:"00:01:00"}, {name: "Jacob", time: "00:07:00"}, {name: "Larry the Bird", time: "00:08:00"}]
  
  let tableRows = topTen.map((row, i) => {
    return <tr key={i}>
            <th scope="row">{i + 1}</th>
            <td>{row.name}</td>
            <td>{row.time}</td>
          </tr>
  })

  return (
    <div className="highScores container mt-3 mb-3">
    <table className="table table-sm">
      <thead className="table-dark">
        <tr>
          <th colSpan="12" className="text-center">Hall of Fame</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {tableRows}
      </tbody>
    </table>
    </div>
  )
}