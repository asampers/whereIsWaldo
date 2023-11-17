import React, {useState, useEffect} from "react";
import { clockify } from "../utils/clockify";

export default HighScores = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const url = "/api/v1/scores/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setScores(res))
      .catch(() => navigate("/"));
  }, []);
  
  const hallOfFameScores = scores.map((row, i) => {
    return <tr key={i}>
      <th scope="row">{i + 1}.</th>
        <td>{row.name}</td>
        <td>{clockify(row.time)}</td>
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
        {hallOfFameScores}
      </tbody>
    </table>
    </div>
  )
}