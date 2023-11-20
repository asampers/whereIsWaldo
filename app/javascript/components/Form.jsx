import React, { useState } from "react";

export default Form = ({submit}) => {
  const [name, setName] = useState("")
  
  return (
    <form onSubmit={(e) => submit(e, name)}>
      <div className="mb-3 row align-items-end">
        <div className="col">
          <label htmlFor="name" className="form-label">
            Enter Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div> 
        <div className="col">
          <button type="submit" className="btn btn-primary">
            Record Score
          </button>
        </div>  
      </div>
    </form>
  )
}