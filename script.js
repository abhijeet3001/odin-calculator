let firstNo = "";
let secondNo = "";
let operator;
let result;
const buttons = document.querySelectorAll(".btn");
const displayScreen = document.querySelector(".screen");

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
    (firstNo += num), (displayScreen.textContent = firstNo);
  } else (secondNo += num), (displayScreen.textContent = secondNo);
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
    displayScreen.textContent = result;
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
      displayScreen.textContent = result;
    }
  } else inputNumbers(value);
  console.log(`result is ${result}`);
}
buttons.forEach((button) => button.addEventListener("click", clickButton));
