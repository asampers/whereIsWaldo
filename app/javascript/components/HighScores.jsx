import React, {useState, useEffect} from "react";
import { clockify } from "../utils/clockify";
import Form from "./Form";

export default HighScores = ({time}) => {
  const [scores, setScores] = useState([]);
  const [updated, setUpdated] = useState(null)

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
  }, [updated]);

  const onSubmit = (event, name) => {
    event.preventDefault();
    const url = "/api/v1/scores/create";
    if(name.length == 0) {name = "Anon"}
    const body = {
      name,
      time
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => setUpdated(true))
      .catch((error) => console.log(error.message));
  };
  
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
      {bestTime && !updated && <Form submit={onSubmit}/>}
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