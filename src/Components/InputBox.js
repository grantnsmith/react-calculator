import React from "react";

function InputBox(props) {
  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="0"
        value={props.userInput}
        readOnly={true}
      ></input>
    </div>
  );
}

export default InputBox;
