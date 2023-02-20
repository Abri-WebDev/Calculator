const lastOperation = document.querySelector('.lastOpp');
const currentOperation = document.querySelector('.currentOpp');
const numberButtons = document.querySelectorAll('[data-key]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const decimalButtons = document.querySelector('[data-decimal]');
const refreshButton = document.querySelector('.clear');

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
    currentOperation.textContent = '';  
    currentOperation.textContent += num;
  }

  function setOperation (e) {
    currentOperation.textContent = e
  }
