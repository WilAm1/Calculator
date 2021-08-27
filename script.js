// Acquire displayable btns

const btnDisplayableArr = Array.from(document.querySelectorAll('.btn-display'));
console.log(btnDisplayableArr);
const inputTextDOM = document.querySelector('#input-text');

// Display Input into the input Paragraph

function displayInitExp(str) {
    inputTextDOM.textContent = str;
}

function displayCompExp(expression) {
    const computationDOM = document.querySelector('#computation');
    computationDOM.textContent = expression;
}

function storeResult(result) {
    isSecondNum = true;
    firstNum = result;
    secondNum = '';
}
let firstNum = '';
let secondNum = '';
let isSecondNum = false;
let operatorValue = '';
let result = 0;
let compExpression = '';

btnDisplayableArr.forEach(btn => {
    btn.addEventListener('click', e => {
        const num = e.target.textContent;
        let updateNum = '';
        if (!isSecondNum) {
            firstNum += num;
            updateNum = firstNum;
        } else {
            secondNum += num;
            updateNum = secondNum;
        }
        displayInitExp(updateNum);
        console.log('Display:', updateNum, isSecondNum);
    })
});

// If operator is found, move it to computation p
const btnOperators = Array.from(document.querySelectorAll('.btn-operator'));
btnOperators.forEach(btn => {
    btn.addEventListener('click', e => {
        operatorValue = e.target.textContent;
        compExpression = firstNum + operatorValue;
        displayCompExp(compExpression);
        console.log(operatorValue);
        isSecondNum = true;
        displayInitExp('');
        console.log('1stNum', firstNum);
    })
});

// make input P displayable again.
// 
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


const equalBtn = document.querySelector('.btn-equal');

equalBtn.addEventListener('click', () => {
    compExpression = firstNum + operatorValue + secondNum;
    const result = operate(+firstNum, +secondNum, operatorValue);
    console.log('result', result);
    displayCompExp(compExpression);
    displayInitExp(result);
    storeResult(result);
});