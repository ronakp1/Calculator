class Calculator {
  constructor(previousSelectedBtnValue, currentSelectedBtnValue) {
    this.previousSelectedBtnValue = previousSelectedBtnValue;
    this.currentSelectedBtnValue = currentSelectedBtnValue;
    this.clear();
    const holdNumbers = [];
    var counter = 0;
  }

  clear() {
    this.currentOperand = '';
    holdnumb = [];
  }

  whichOperator(op) {
    
  }


  compute() {
    if (op == "+") {

    }
    if (op == "-") {

    }
    if (op == "/") {

    }
    if (op == "*") {

    }
  }

  append(number) {
    holdNumbers.push(number); //[5,3]
    this.currentOperand = number; //current =5, =3
    if (counter >= 1) {
      this.previousSelectedBtnValue = array[counter - 1]; //store last in previous
    }
    counter++; //1 2
  }

  updateDisplay() {
    this.currentSelectedBtnValue.innerText = this.currentOperand;

  }
}

const equals = document.getElementById('equals');
const ac = document.getElementById('ac');
const display = document.getElementById('display');

const selectedNumber = document.QuerySelectorAll('.number');
const selectedOP = document.QuerySelectorAll('operation');

const previousSelectedBtnValue = document.QuerySelector('prevOP');
const currentSelectedBtnValue = document.QuerySelector('currentOp');

const calculator = new Calculator(previousSelectedBtnValue, currentSelectedBtnValue);

selectedNumber.forEach(button => {
  button.addEventListener('click', () => {
    calculator.append(button.innerText)
    calculator.updateDisplay()
  })
})

selectedOP.forEach(button => {
  button.addEventListener("click", () => {
    calculator.whichOperator(button.innerText);
  })
})

/*var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var add = document.getElementById('add');
var minus = document.getElementById('minus'); */
