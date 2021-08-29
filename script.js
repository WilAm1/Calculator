// Display into Paragraphs
function displayInitExp(str) {
    const inputTextDOM = document.querySelector('#input-text');
    inputTextDOM.textContent = str;
}

function displayCompExp(expression) {
    const computationDOM = document.querySelector('#computation');
    computationDOM.textContent = expression;
}

function operate(a, b, operator) {
    // Compute total
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };
    const result = operators[operator](a, b);
    if (result === Infinity) return 'Im gonna break lmao'
        // Check if decimal num 
    if (result % 1 !== 0) return result.toFixed(3)
    return result
}

function wipeValues(result) {
    firstNum = result;
    secondNum = '';
    operatorValue = '';
    isSecondNum = false;
}

function updateNum(numToUpdate, num) {
    numToUpdate = numToUpdate.toString();
    if (numToUpdate.includes('.') && (num === ".")) {
        return numToUpdate
    }
    numToUpdate += num;
    // Prevents redundant zeros 
    return numToUpdate.replace(/^0+/, '')
}

function deleteDigit(str) {
    str = str.toString();
    return str.slice(0, str.length - 1)
}



// DOM constants
const btnDisplayableArr = Array.from(document.querySelectorAll('.btn-display'));
// Other btns
const clearBtn = document.querySelector('.btn-clear');
const delBtn = document.querySelector('.btn-del');
const equalBtn = document.querySelector('.btn-equal');
// If operator is clicked, moved it to upper div.
const operatorBtns = Array.from(document.querySelectorAll('.btn-operator'));

// Editable Values
let firstNum = '';
let secondNum = '';
let isSecondNum = false;
let operatorValue = '';
let compExpression = '';

// copyright date
const date = document.getElementById('date');
date.textContent = new Date().getFullYear();


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
    })
});


operatorBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        if (firstNum === "" || isNaN(firstNum)) return //Catches NaN and undefined values
            //Runs to compute first operation if attempting to run multiple operation
        if (secondNum !== "") {
            const tempResult = operate(+firstNum, +secondNum, operatorValue);
            wipeValues(tempResult);
        }
        operatorValue = e.target.textContent;
        compExpression = firstNum + operatorValue;
        isSecondNum = true;
        secondNum = '';
        displayCompExp(compExpression);
        displayInitExp('');
    })
});



equalBtn.addEventListener('click', () => {
    if (firstNum === '' || operatorValue === "" || secondNum === '') return
    compExpression = firstNum + operatorValue + secondNum;
    const result = operate(+firstNum, +secondNum, operatorValue);
    displayCompExp(compExpression);
    displayInitExp(result);
    wipeValues(result);
});


clearBtn.addEventListener('click', () => {
    firstNum = '';
    secondNum = '';
    isSecondNum = false;
    operatorValue = '';
    compExpression = '';
    displayCompExp('');
    displayInitExp('0');
});


delBtn.addEventListener('click', () => {
    if (!isSecondNum) {
        firstNum = deleteDigit(firstNum);
        displayInitExp(firstNum);
    } else {
        secondNum = deleteDigit(secondNum);
        displayInitExp(secondNum);
    }
})