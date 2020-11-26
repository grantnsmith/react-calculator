import React from "react";
import InputBox from "./Components/InputBox";
import Button from "./Components/Button";
import buttons from "./assets/buttons.json";
import calculate from "./helperFunctions";

function App() {
  const [userInput, setUserInput] = React.useState("");
  const [equation, buildEquation] = React.useState({
    firstNum: "",
    symbol: "",
    secondNum: "",
  });

  React.useEffect(() => {
    if (equation.secondNum) {
      setUserInput(calculate(equation));
    }
  }, [equation]);

  const onClick = (event) => {
    event.preventDefault();
    if (event.target.value.match(/[0-9]/)) {
      setUserInput(userInput + event.target.value);
    }
    if (event.target.value === "AC") {
      setUserInput("");
    }
    if (event.target.value === "+") {
      buildEquation({
        firstNum: userInput,
        symbol: "+",
      });
      setUserInput("");
    }
    if (event.target.value === "-") {
      buildEquation({
        firstNum: userInput,
        symbol: "-",
      });
      setUserInput("");
    }
    if (event.target.value === "x") {
      buildEquation({
        firstNum: userInput,
        symbol: "x",
      });
      setUserInput("");
    }
    if (event.target.value === "÷") {
      buildEquation({
        firstNum: userInput,
        symbol: "÷",
      });
      setUserInput("");
    }
    if (event.target.value === "=") {
      if (equation.firstNum !== "") {
        buildEquation({
          firstNum: equation.firstNum,
          symbol: equation.symbol,
          secondNum: userInput,
        });
      } else {
        alert("Must enter a number first");
      }
    }
  };

  return (
    <div>
      <InputBox userInput={userInput} onClick={onClick} />
      {buttons.map((buttons) => (
        <Button
          onClick={onClick}
          display={buttons.display}
          functionality={buttons.functionality}
        />
      ))}
    </div>
  );
}

export default App;
