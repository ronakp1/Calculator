
const equals1 = document.querySelector('[data-equals]');
const ac = document.querySelector('[data-ac]');

const display = document.getElementById('display');
const former = document.getElementById('former');
const selectedNumber = document.querySelectorAll('[data-number]');
const selectedOP = document.querySelectorAll('[data-op]');

const calculator = {
    currentOperand: '',
    prevOperand: '',
    currentOperation: '',
    set current(currents) {
        this.currentOperand = currents;
    },
    get current() {
        return this.currentOperand;
    },
    set previous(previouse) {
        this.prevOperand = previouse;
    },
    get previous() {
        return this.prevOperand;
    },
    set currentOp(operation) {
        this.currentOperation = operation;
    },
    get currentOp() {
        return this.currentOperation;
    }
};

const append = (number) => {
    if (number === "." && calculator.current.indexOf(".") != -1) {
        return;
    }
    calculator.current = calculator.current.toString() + number.toString();
}

const updateDisplay = () => {
    console.log("update" + calculator.current);
    display.innerText = calculator.current;
    former.innerText = calculator.previous;
}

const clear = () => {
    display.innerText = '';
    calculator.current = '';
    calculator.previous = '';
    calculator.currentOp = '';
    console.log(calculator.current + " clear");
}
const checkOperation = (operation) => {
    if (operation == '') {
        return;
    }
    if (calculator.previous !== '') {
        compute();
    }
    calculator.currentOp = operation;
    calculator.previous = calculator.current;
    calculator.current = '';

}

const checkNaN = (first,second) => {
    if(isNaN(first) || isNaN(second)) return;
}

const compute = () => {
    let total;
    const firstNumb = parseFloat(calculator.previous);
    const secondNumb = parseFloat(calculator.current);

   checkNaN(firstNumb,secondNumb);

    console.log(calculator.currentOp)
    if (calculator.currentOp === ("+")) {
        console.log("we made it");
        total = firstNumb + secondNumb;
    }

    if (calculator.currentOp === "-") {
        total = firstNumb - secondNumb;
        console.log(total + "" + firstNumb + "secondNumb");
    }
    if (calculator.currentOp === "/") {
        total = firstNumb / secondNumb;

    }
    if (calculator.currentOp === "*") {
        total = firstNumb * secondNumb;

    }
    console.log(total + "total");
    calculator.current = total;

    console.log(calculator.current + "outside");
    calculator.currentOp = '';
    calculator.previous = ''
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
        console.log("now go here" + calculator.current)
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
