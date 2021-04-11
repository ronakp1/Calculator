
const equals1 = document.querySelector('[data-equals]');
const ac = document.querySelector('[data-ac]');

const display = document.getElementById('display');
const selectedNumber = document.querySelectorAll('[data-number]');
const selectedOP = document.querySelectorAll('[data-op]');

//const holdOP = [];
//const holdNumbers = [];

//let currentOperand = '';
//let prevOperand = '';
//let currentOperation = '';

const calculator = {
    currentOperand : '',
    prevOperand: '',
    currentOperation: '',
};

const append = (number) => {
    if (number === "." && calculator.currentOperand.indexOf(".") != -1) {
        return;
    } 
        calculatorcurrentOperand += number;
}
const updateDisplay = () => 
console.log("test" + currentOperand);
display.innerText = currentOperand;


const clear = () =>
    display.innerText = "";
    currentOperand = "";
     prevOperand = '';
    currentOperation = "";

const checkOperation = (operation) => {
    if (operation == '') {
        return;
    }
    if (prevOperand !== '') {
        currentOperation = operation;
        compute();
    }

    prevOperand = currentOperand;
    currentOperand = '';

}

const compute = () => {
    var total;
    var firstNumb = parseFloat(prevOperand);
    var secondNumb = parseFloat(currentOperand);

    if(isNaN(firstNumb) || isNaN(secondNumb)) return;

    if (currentOperation.indexOf("+") != -1) {
        total = firstNumb + secondNumb;
        console.log(total +"inside");
        console.log(currentOperation);
    }

    if (currentOperation.indexOf("-") != -1) {
        total = firstNumb - secondNumb;

    }
    if (currentOperation.indexOf("/") != -1) {
        total = firstNumb / secondNumb;

    }
    if (currentOperation.indexOf("*") != -1) {
        total = firstNumb * secondNumb;

    }
    currentOperand = total;
    console.log(currentOperand +"outside");
    currentOperation = '';
    prevOperand = '';

}

selectedNumber.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerText);
        append(button.innerText);
        updateDisplay();
    })
})



selectedOP.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.innerText);
        checkOperation(button.innerText);
        updateDisplay();
    })
})

ac.addEventListener('click', button => {
    clear();
    updateDisplay();
})
equals1.addEventListener('click', button => {
    compute(); 
    updateDisplay();
})
