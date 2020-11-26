import React from "react";

function InputBox(props) {
  return (
    <div>
      <input type="text" placeholder="0" value={props.userInput}></input>
    </div>
  );
}

export default InputBox;
