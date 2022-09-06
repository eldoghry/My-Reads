import React from "react";
import PropTypes from "prop-types";

function Message({ msg, type }) {
  return (
    <div className="message">
      {type === "error" && <span style={{ fontSize: "50px" }}>&#128546;</span>}
      {type === "info" && <span style={{ fontSize: "50px" }}>&#128226;</span>}
      <p>{msg}</p>
    </div>
  );
}

Message.prototype = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Message;
