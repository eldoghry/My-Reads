import React from "react";

function Message({ msg, type }) {
  return (
    <div className="message">
      {type === "error" && <span style={{ fontSize: "50px" }}>&#128546;</span>}
      {type === "info" && <span style={{ fontSize: "50px" }}>&#128226;</span>}
      <p>{msg}</p>
    </div>
  );
}

export default Message;
