import React from "react";
import Wrapper from "./Components/Wrapper";
import InputBox from "./Components/InputBox";
import Button from "./Components/Button";
import buttons from "./assets/buttons.json";
import calculate from "./helperFunctions";
import "./App.css";

function App() {
  const [userInput, setUserInput] = React.useState("");
  const [equation, buildEquation] = React.useState({
    firstNum: "",
    symbol: "",
    secondNum: "",
  });
  const [equationDone, updateEquationState] = React.useState(false);

  // Calculate the equation after second number is updated in state
  React.useEffect(() => {
    if (equation.secondNum) {
      setUserInput(calculate(equation));
      buildEquation({
        firstNum: "",
        symbol: "",
        secondNum: "",
      });
    }
  }, [equation]);

  const onClick = (event) => {
    event.preventDefault();
    // If an equation was just completed, a number button press clears input and adds the most current event value
    if (equationDone) {
      updateEquationState(false);
      setUserInput(event.target.value);
    }
    if (event.target.value.match(/[0-9]/) && !equationDone) {
      setUserInput(userInput + event.target.value);
    }
    if (event.target.value === ".") {
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
        // An equation has been completed, update the state
        updateEquationState(true);
      }
    }
  };

  return (
    <div>
      <Wrapper>
        <InputBox userInput={userInput} onClick={onClick} />
        {buttons.map((buttons) => (
          <Button
            key={buttons.display}
            id={buttons.id}
            onClick={onClick}
            display={buttons.display}
            functionality={buttons.functionality}
          />
        ))}
      </Wrapper>
    </div>
  );
}

export default App;
