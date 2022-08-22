let operandA = 0;
let operandB = 0;
let currentOperator = '';
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

function bindButtons() {
    const digits = document.querySelectorAll('.digit');
    const display = document.querySelector('.display');

    digits.forEach(digit => {
        digit.addEventListener('click', () => {
            displayText += digit.textContent;  
            display.textContent = displayText;
        });
    });

    const operators = document.querySelectorAll('.operator');

    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            currentOperator = operator.textContent;
            displayText += ` ${currentOperator} `;
            display.textContent = displayText;
        })
    })

    const equalSign = document.querySelector('.equal');

    equalSign.addEventListener('click', () => {
        const result = operate(currentOperator, operandA, operandB)
        displayText.textContent = result;
        console.log(currentOperator, operandA, operandB)
    })
}

bindButtons();
