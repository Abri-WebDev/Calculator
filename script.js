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

numberButtons.forEach(button => {
    button.addEventListener('click', function() {
      appendNumber(button.textContent);
    });
  });

operatorButtons.forEach(button => {
    button.addEventListener('click', function() {
     setOperation(button.textContent);
    });
  });

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
      console.log('second operation is ', secondOperation)
      console.log('current operation is ', currentOperation.textContent)
      lastOperation.textContent = `${firstOperation} ${currentOpe} ${secondOperation}`;
      currentOpe = null;
    }
      firstOperation = currentOperation.textContent;
      console.log('first operation on setOperation function is ', firstOperation)
      currentOpe = e;
      lastOperation.textContent = `${firstOperation} ${currentOpe}`;
      currentOperation.textContent = secondOperation;
      console.log('last operation on setOperation function is ', lastOperation.textContent)
      resetScreen = true;
  }
 