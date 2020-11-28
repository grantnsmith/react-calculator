import React from "react";

function Button(props) {
  return (
    <button
      className="button"
      id={props.id}
      value={props.display}
      onClick={props.onClick}
    >
      {props.display}
    </button>
  );
}

export default Button;
