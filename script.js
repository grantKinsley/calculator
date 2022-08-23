let operandA = 0;
let operandB = null;
let currentOperator = null;
let displayText = "";

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

const resetVars = (result = '0') => {
    operandA = result;
    operandB = null;
    currentOperator = null;
}

function bindButtons() {
    const digits = document.querySelectorAll('.digit');
    // const display = document.querySelector('.display');

    digits.forEach(digit => {
        digit.addEventListener('click', () => {
            const txt = digit.textContent;
            if (!currentOperator) {
                // update operandA
                operandA = (operandA === 0) ? txt : (operandA + txt);
                displayText = operandA;
            }
            else {
                // update operandB
                operandB = (operandB === null) ? txt : (operandB + txt);
                displayText = operandB;
            }
            updateDisplay();
        });
    });

    const operators = document.querySelectorAll('.operator');

    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            currentOperator = operator.textContent;
            displayText += `${currentOperator}`;
            updateDisplay();
        })
    })

    const equalSign = document.querySelector('.equal');

    equalSign.addEventListener('click', () => {
        if (operandB === null || currentOperator === null) {
            return;
        }
        const result = operate(currentOperator, +operandA, +operandB);
        resetVars(result);
        displayText = operandA;
        updateDisplay();
    })
}

function updateDisplay(str = displayText) {
    const display = document.querySelector('.display');
    console.log(operandA, operandB, currentOperator);
    if (str === "") {
        str = operandA;
    }

    display.textContent = str;
}

bindButtons();
updateDisplay();
