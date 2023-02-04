const lastOperation = document.querySelector('.lastOpp');
const currentOperation = document.querySelector('.currentOpp');
const numberButtons = document.querySelectorAll('[data-key]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const decimalButtons = document.querySelector('[data-decimal');

let firstOperation = 0;
let secondOperation = 0;
let currentOpe = null;

numberButtons.forEach(button => {
    button.addEventListener('click', function() {
      console.log(button)
      appendNumber(button.textContent);
    });
  });

operatorButtons.forEach(button => {
    button.addEventListener('click', function() {
      console.log(button)
     setOperation(button.textContent)
    });
  });

function appendNumber (num) {
  if (firstOperation === 0) {
    firstOperation = num;
  } else {
    firstOperation += num;
  }

  currentOperation.textContent = firstOperation;
  console.log('current operation variable is ', currentOperation)
}

function setOperation (e) {
  currentOpe = e;
  lastOperation.textContent = `${firstOperation} ${currentOpe}`
  firstOperation = 0;
}

