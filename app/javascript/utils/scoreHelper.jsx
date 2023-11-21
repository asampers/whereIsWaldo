import { useEffect, useState } from "react";


export default scoreHelper = () =>{
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

  const postScore = (event, name, time) => {
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

  return { scores, updated, postScore }
}