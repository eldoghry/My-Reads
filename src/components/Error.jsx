import React from "react";

function Error({ msg }) {
  return (
    <div className="error">
      <span style={{ fontSize: "50px" }}>&#128546;</span>
      <p>{msg}</p>
    </div>
  );
}

export default Error;
