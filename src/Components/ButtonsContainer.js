import React from "react";

function ButtonContainer(props) {
  return (
    <div>
      <ul className="list-unstyled">{props.children}</ul>
    </div>
  );
}

export default ButtonContainer;
