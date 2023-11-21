import React, {useState, useEffect} from "react";
import scoreHelper from "../utils/scoreHelper";
import { clockify } from "../utils/clockify";
import Form from "./Form";

export default HighScores = ({time}) => {
  const {scores, updated, postScore } = scoreHelper();
  
  const hallOfFameScores = scores.map((row, i) => {
    return <tr key={i}>
      <th scope="row">{i + 1}.</th>
        <td>{row.name}</td>
        <td>{clockify(row.time)}</td>
    </tr>
  })
  
  let bestTime = scores.length > 0 ? scores[scores.length-1].time >= time : null

  return (
    <div className="highScores container mt-3 mb-3">
      {bestTime && !updated && <Form submit={postScore} time={time}/>}
      {bestTime && updated && <p className="text-center">Congratulations! Your score has been saved.</p>}
      {!bestTime && <p className="text-center">Can you make it into the Top 10?</p>}
    <table className="table table-sm">
      <thead className="table-dark">
        <tr>
          <th colSpan="12" className="text-center">Hall of Fame</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {hallOfFameScores}
      </tbody>
    </table>
    </div>
  )
}