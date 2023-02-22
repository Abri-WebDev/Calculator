const lastOperation = document.querySelector('.lastOpp');
const currentOperation = document.querySelector('.currentOpp');
const numberButtons = document.querySelectorAll('[data-key]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const decimalButtons = document.querySelector('[data-decimal]');
const refreshButton = document.querySelector('.clear');

let firstOperation = '';
let secondOperation = '';
let resetScreen = false;
let currentOpe = null;

  function appendNumber (num) {
    if (currentOperation.textContent == '0' || resetScreen) {
      currentOperation.textContent = '';
      resetScreen = false;
    }
      currentOperation.textContent += num;
  }

  function setOperation (e) {
    if (currentOpe !== null) { 
      secondOperation = currentOperation.textContent;
      currentOperation.textContent =  roundResult(calculate(currentOpe, firstOperation, secondOperation));
      lastOperation.textContent = `${firstOperation} ${currentOpe} ${secondOperation}`;
      currentOpe = null;
    }
      firstOperation = currentOperation.textContent;
      currentOpe = e;
      lastOperation.textContent = `${firstOperation} ${currentOpe}`;
      currentOperation.textContent = secondOperation;
      resetScreen = true;
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
      case '/':
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

refreshButton.addEventListener('click', refreshScreen);
