import React from "react";
import InputBox from "./Components/InputBox";
import Button from "./Components/Button";
import buttons from "./assets/buttons.json";

function App() {
  return (
    <div>
      <InputBox />
      {buttons.map((buttons) => (
        <Button
          display={buttons.display}
          functionality={buttons.functionality}
        />
      ))}
    </div>
  );
}

export default App;
