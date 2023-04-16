let firstNo = "";
let secondNo = "";
let operator;
const buttons = document.querySelectorAll(".btn");

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

function clickButton(e) {
  let value = e.target.value;
}
buttons.forEach((button) => button.addEventListener("click", clickButton));
