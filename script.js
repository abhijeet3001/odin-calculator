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
function isOperator(ch){
  return ch=="+"||ch=="-"||ch=="*"||ch=="/"||ch=="=";
}
function inputNumbers(num){
  if(!operator){
    firstNo+=num;
  }
  else secondNo+=num;
}
function clickButton(e) {
  let value = e.target.value;
  if(value==="clear"){
    // run Function to clear display
  }
  else if(value==='delete'){
    // run Function to delete last value
  }
  else if(isOperator(value)){
    // run Function to check operator is present or not
    operator=value;
  }
  else inputNumbers(value);
}
buttons.forEach((button) => button.addEventListener("click", clickButton));
