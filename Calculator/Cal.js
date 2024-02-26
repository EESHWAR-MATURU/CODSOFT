document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.calculator button');
  const display = document.getElementById('display');
  let displayValue = '';
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonValue = button.textContent;
      if (buttonValue === '=') {
        calculate();
      } 
      else if (buttonValue === 'C') {
        clearDisplay();
      }
       else if (buttonValue === '⌫') {
        backspace(); 
       }
      else {
        appendToDisplay(buttonValue);
      }
    });
  });
  function appendToDisplay(value) {
    displayValue += value;
    display.value = displayValue;
  }
  function clearDisplay() {
    displayValue = '';
    display.value = '';
  }
   function backspace() {
    displayValue = displayValue.slice(0, -1); 
    display.value = displayValue;
  }
  function calculate() {
    try {
      const result = eval(displayValue);
      display.value = result;
      displayValue = '';
    } catch (error) {
      display.value = 'Error';
    }
  }
});
