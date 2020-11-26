function calculate(obj) {
  if (obj.symbol === "+") {
    return Number(obj.firstNum) + Number(obj.secondNum);
  }
  if (obj.symbol === "-") {
    return Number(obj.firstNum) - Number(obj.secondNum);
  }
  if (obj.symbol === "x") {
    return Number(obj.firstNum) * Number(obj.secondNum);
  }
  if (obj.symbol === "÷") {
    return Number(obj.firstNum) / Number(obj.secondNum);
  }
}

export default calculate;
