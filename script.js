const lastOperation = document.querySelector('.lastOpp');
const currentOperation = document.querySelector('.currentOpp');
const numberButtons = document.querySelectorAll('[data-key]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const decimalButtons = document.querySelector('[data-decimal]');
const refreshButton = document.querySelector('.clear');
const equalButtons = document.querySelectorAll('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const enterButton = document.querySelector('#enter');

let firstOperation = '';
let secondOperation = '';
let resetScreen = false;
let currentOpe = null;

  function appendNumber (num) {
    if (num === '.' && currentOperation.textContent.includes('.')) return;
    if (currentOperation.textContent == '0' || resetScreen) {
      currentOperation.textContent = '';
      resetScreen = false;
    }
      currentOperation.textContent += num;
  }

  function setOperation (e) {
    if (currentOpe !== null) { 
     operate();
    }
      firstOperation = currentOperation.textContent;
      currentOpe = convertOperator(e);
      lastOperation.textContent = `${firstOperation} ${currentOpe}`;
      currentOperation.textContent = secondOperation;
      resetScreen = true;
  }
 
function operate () {
  secondOperation = currentOperation.textContent;
  currentOperation.textContent =  roundResult(calculate(currentOpe, firstOperation, secondOperation));
  lastOperation.textContent = `${firstOperation} ${currentOpe} ${secondOperation}`;
  currentOpe = null;
  console.log('operate is ', operate)
}

  function add (a, b) {
    return b + a;
  }
  
  function minus (a, b) {
    return a - b;
  }
  
  function divide (a, b) {
    return a / b;
  }
  
  function multiply (a, b) {
    return a * b;
  }

  function calculate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add (a, b);
        case '-':
            return minus (a, b);
        case 'x':
            return multiply (a, b);
      case '÷':
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
    }
  }

  function roundResult(number) {
    return Math.round(number * 1000) / 1000
  }
  
function refreshScreen () {
  firstOperation = 0;
  secondOperation = 0;
  currentOpe = null;
  lastOperation.textContent = '';
  currentOperation.textContent = '';
}

function convertOperator(keyboardOperator) {
  if (keyboardOperator === '/' || keyboardOperator === '%') return '÷'
  if (keyboardOperator === '*') return 'x'
  if (keyboardOperator === '-') return '-'
  if (keyboardOperator === '+') return '+'
}

function keyboardInput (e) {
  console.log('keyboard in put is ', e.key)
  if (e.key >= '0' && e.key <= '9' || e.key === '.') appendNumber(e.key);
  if (e.key === 'Enter' || e.key === "=" || e.key === ' ') operate();
  if (e.key === 'Escape' || e.key === 'r') refreshScreen();
  if (e.key === 'Backspace' || e.key === 'd') deleteNumber();
  if (e.key === '+' || e.key === '/' || e.key === '-' || e.key === '*' || e.key === '+') 
{
    e.preventDefault();
    setOperation(e.key);
  }
}

function deleteNumber() {
  currentOperation.textContent = currentOperation.textContent.slice(0, -1);
}

operatorButtons.forEach(button => {
  button.addEventListener('click', function() {
   setOperation(button.textContent);
  });
});

numberButtons.forEach(button => {
  button.addEventListener('click', function() {
    appendNumber(button.textContent);
  });
});

window.addEventListener('keydown', keyboardInput);
refreshButton.addEventListener('click', refreshScreen);
deleteButton.addEventListener('click', deleteNumber);
equalButtons.addEventListener('click', operate);
enterButton.addEventListener('click', operate);