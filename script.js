const ERROR_MSG = "LOL";

let operandA = 0;
let operandB = null;
let currentOperator = null;

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    if (b === 0) {
        return undefined;
    }
    return a / b;
}

const operate = (operator, a, b) => {
     switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
     }
}

function bindButtons() {
    const digits = document.querySelectorAll('.digit');

    digits.forEach(digit => {
        digit.addEventListener('click', () => {
            const txt = digit.textContent;
            if (!currentOperator) {
                // update operandA
                operandA = (operandA === 0 || operandA === ERROR_MSG) 
                            ? txt 
                            : (operandA + txt);
            }
            else {
                // update operandB
                operandB = (operandB === null) 
                            ? txt 
                            : (operandB + txt);
            }
            updateDisplay();
        });
    });

    const operators = document.querySelectorAll('.operator');

    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            currentOperator = operator.textContent;
            updateDisplay();
        });
    });

    const equalSign = document.querySelector('.equal');

    equalSign.addEventListener('click', () => {
        if (operandB === null || currentOperator === null) {
            return;
        }
        let result = operate(currentOperator, +operandA, +operandB);
        if (result === undefined) {
            result = ERROR_MSG;
        }
        resetVars(result);
        updateDisplay();
    });

    const clearBtn = document.querySelector('.clear');

    clearBtn.addEventListener('click', () => {
        resetVars();
        updateDisplay();
    });
}

function updateDisplay() {
    const display = document.querySelector('.display');
    console.log(operandA, operandB, currentOperator);
    let output;

    if (!currentOperator) {
        output = operandA;
    }
    else if (!operandB){
        output = operandA + currentOperator;
    }
    else {
        output = operandB;
    }

    display.textContent = output;
}

const resetVars = (result = 0) => {
    operandA = result;
    operandB = null;
    currentOperator = null;
}

bindButtons();
updateDisplay();
