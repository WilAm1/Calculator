// Acquire displayable btns
const btnDisplayableArr = Array.from(document.querySelectorAll('.btn-display'));
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

// Prevents redundant zeros 
function updateNum(numToUpdate, num) {
    numToUpdate = numToUpdate.toString();
    if (numToUpdate.includes('.')) {
        if (num === ".") return numToUpdate
        return numToUpdate += num
    }
    numToUpdate += num;
    if (num === ".") return numToUpdate
    return numToUpdate.replace(/^0+/, '')
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
    })
});


// If operator is clicked, moved it to upper div.
const operatorBtns = Array.from(document.querySelectorAll('.btn-operator'));
operatorBtns.forEach(btn => {
    btn.addEventListener('click', e => {
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


const equalBtn = document.querySelector('.btn-equal');

equalBtn.addEventListener('click', () => {
    if (firstNum === '' || operatorValue === "" || secondNum === '') return
    compExpression = firstNum + operatorValue + secondNum;
    const result = operate(+firstNum, +secondNum, operatorValue);
    displayCompExp(compExpression);
    displayInitExp(result);
    wipeValues(result);
});

// Other btns
const clearBtn = document.querySelector('.btn-clear');
clearBtn.addEventListener('click', () => {
    firstNum = '';
    secondNum = '';
    isSecondNum = false;
    operatorValue = '';
    compExpression = '';
    displayCompExp('');
    displayInitExp('0');
});

function deleteOneLetter(str) {
    str = str.toString();
    return str.slice(0, str.length - 1)
}
const delBtn = document.querySelector('.btn-del');
delBtn.addEventListener('click', () => {
    if (!isSecondNum) {
        firstNum = deleteOneLetter(firstNum);
        displayInitExp(firstNum);
    } else {
        secondNum = deleteOneLetter(secondNum);
        displayInitExp(secondNum);
    }
})