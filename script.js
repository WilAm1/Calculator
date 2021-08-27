// Acquire displayable btns

const btnDisplayableArr = Array.from(document.querySelectorAll('.btn-display'));
console.log(btnDisplayableArr);
const inputTextDOM = document.querySelector('#input-text');

// Display into Paragraphs
function displayInitExp(str) {
    inputTextDOM.textContent = str;
}

function displayCompExp(expression) {
    const computationDOM = document.querySelector('#computation');
    computationDOM.textContent = expression;
}

// Compute total
function operate(a, b, operator) {
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };
    const result = operators[operator](a, b);
    console.log(result);
    if (result === Infinity) return 'lmao'
    return result
}

function storeResult(result) {
    isSecondNum = true;
    firstNum = result;
    secondNum = '';
}

// Prevents redundant zeros 
function updateNum(numToUpdate, num) {
    numToUpdate += num;
    return Number(numToUpdate).toString()
}

let firstNum = '';
let secondNum = '';
let isSecondNum = false;
let operatorValue = '';
let compExpression = '';

btnDisplayableArr.forEach(btn => {
    btn.addEventListener('click', e => {
        const num = e.target.textContent;
        if (!isSecondNum) {
            firstNum = updateNum(firstNum, num);
        } else {
            secondNum = updateNum(secondNum, num);
        }
        const displayNum = (!isSecondNum) ? firstNum : secondNum;

        displayInitExp(displayNum);
        console.log('Display:', displayNum, isSecondNum);
    })
});

// If operator is clicked, moved it to upper div.
const operatorBtns = Array.from(document.querySelectorAll('.btn-operator'));
operatorBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        operatorValue = e.target.textContent;
        compExpression = firstNum + operatorValue;
        isSecondNum = true;
        displayCompExp(compExpression);
        displayInitExp('');
        console.log('operator', operatorValue);
        console.log('1stNum', firstNum);
    })
});


const equalBtn = document.querySelector('.btn-equal');

equalBtn.addEventListener('click', () => {
    compExpression = firstNum + operatorValue + secondNum;
    const result = operate(+firstNum, +secondNum, operatorValue);
    console.log('result', result);
    displayCompExp(compExpression);
    displayInitExp(result);
    storeResult(result);
});

// Other btns

const clearBtn = document.querySelector('.btn-clear');
clearBtn.addEventListener('click', e => {
    firstNum = '';
    secondNum = '';
    isSecondNum = false;
    operatorValue = '';
    compExpression = '';
    displayCompExp('cleared');
    displayInitExp('cleared');
});