import React, { useState } from "react";

export default Form = ({submit}) => {
  const [name, setName] = useState("")
  
  return (
    <form onSubmit={(e) => submit(e, name)}>
      <p className="text-center">You made the Top 10!</p>
      <div className="mb-3 row justify-content-center align-items-center">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            id="name"
            maxLength="15"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div> 
        <div className="col-4">
          <button type="submit" className="btn btn-primary text-nowrap">
            Record Score
          </button>
        </div>  
      </div>
    </form>
  )
}