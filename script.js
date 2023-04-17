let firstNo = "";
let secondNo = "";
let operator;
const buttons = document.querySelectorAll(".btn");
let result;

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(first, operator, second) {
  if (operator === "+") return add(first, second);
  if (operator === "-") return subtract(first, second);
  if (operator === "*") return multiply(first, second);
  if (operator === "/") return divide(first, second);
}
function isOperator(ch) {
  return ch == "+" || ch == "-" || ch == "*" || ch == "/" || ch == "=";
}
function inputNumbers(num) {
  if (!operator) {
    if (result) result = undefined;
    firstNo += num;
  } else secondNo += num;
}
function clickButton(e) {
  let value = e.target.value;
  if (value === "clear") {
    // run Function to clear display
  } else if (value === "delete") {
    // run Function to delete last value
  } else if (value === "=") {
    if (secondNo) result = operate(firstNo, operator, secondNo);
    else result = firstNo;
    operator = undefined;
    firstNo = "";
    secondNo = "";
  } else if (isOperator(value)) {
    if (!operator) {
      operator = value;
      if (result) firstNo = result;
    } else {
      result = operate(firstNo, operator, secondNo);
      firstNo = result;
      secondNo = "";
      operator = value;
      console.log(result);
    }
  } else inputNumbers(value);
  console.log(`result is ${result}`);
}
buttons.forEach((button) => button.addEventListener("click", clickButton));
