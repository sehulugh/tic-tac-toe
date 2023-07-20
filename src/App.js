import React from "react";


export default function Square() {
  return (
    <div>
      <button className="square">{process.env.NODE_ENV}</button>
      <br></br><br></br><br></br><br></br><br></br>
      <button className="square">{process.env.REACT_APP_API_URL}</button>
    </div>

  );
}
