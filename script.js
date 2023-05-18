let firstNo = "";
let secondNo = "";
let operator;
let result;
const buttons = document.querySelectorAll(".btn");
const displayScreen = document.querySelector(".bottom-screen");
const displayScreenTop = document.querySelector(".top-screen");

function add(a, b) {
  return roundResult(a + b);
}
function subtract(a, b) {
  return roundResult(a - b);
}
function multiply(a, b) {
  return roundResult(a * b);
}
function divide(a, b) {
  if (b === 0) return "Can`t divide by 0! ";
  return roundResult(a / b);
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000
}
function operate(first, operator, second) {
  first = parseFloat(first);
  second = parseFloat(second);
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
    displayScreenTop.textContent = "";
    if (result) result = undefined;
    (firstNo += num)
  } else (secondNo += num)
  updateBottomDisplay()
}
function doEquals() {
  if (secondNo) {
    result = operate(firstNo, operator, secondNo);
    displayScreenTop.textContent = `${firstNo} ${operator} ${secondNo}=`;
    displayScreen.textContent = result;
    operator = undefined;
    firstNo = "";
    secondNo = "";
  }
}
function useOperator(value) {
  if(!firstNo && !result) return;
  else if (!secondNo) {
    operator = value;
    if (result) firstNo = result;
    displayScreen.textContent = "";
  } else {
    result = operate(firstNo, operator, secondNo);
    firstNo = result;
    secondNo = "";
    operator = value;
    displayScreen.textContent = result;
  }
}
function clearDisplay() {
  displayScreen.textContent = "";
  displayScreenTop.textContent = "";
  operator = undefined;
  firstNo = "";
  secondNo = "";
}
function deleteNo() {
  if (!operator)
    (firstNo = firstNo.slice(0, -1))
  else
    (secondNo = secondNo.slice(0, -1))
    updateBottomDisplay();
}

function showTopDisplay() {
  if (operator !== undefined)
    displayScreenTop.textContent = `${firstNo} ${operator}`;
}

function updateBottomDisplay() {
  displayScreen.textContent = !operator ? firstNo: secondNo;
}

function addDecimal(num) {
  if (num === "" || num == parseInt(num)) return ".";
  return "";
}

function isDotPresent() {
  if (!operator) firstNo += addDecimal(firstNo);
  else secondNo += addDecimal(secondNo);
  updateBottomDisplay();
}

function clickButton(e) {
  let value = e.target.value;
  if (value === "clear") clearDisplay();
  else if (value === "delete") deleteNo();
  else if (value === "=") doEquals();
  else if (value === ".") isDotPresent();
  else if (isOperator(value)) useOperator(value);
  else inputNumbers(value);
  showTopDisplay();
}
buttons.forEach((button) => button.addEventListener("click", clickButton));

// Input from Keyboard 
function handleKeyInput(e){
  let value=e.key;
  if (value === "Escape") clearDisplay();
  else if (value === "Backspace") deleteNo();
  else if (value === "=") doEquals();
  else if (value === ".") isDotPresent();
  else if (isOperator(value)) useOperator(value);
  else if(value>=0 && value<=9) inputNumbers(value);
  showTopDisplay();
  e.preventDefault();
  return;
}

window.addEventListener('keydown',handleKeyInput);