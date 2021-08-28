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
    if (result === Infinity) return 'Im gonna break lmao'
        // Check if decimal num 
    if (result % 1 !== 0) return result.toFixed(3)

    return result
}

function storeResult(result) {
    isSecondNum = false;
    firstNum = result;
    secondNum = '';
    operatorValue = '';
}

// Prevents redundant zeros 
function updateNum(numToUpdate, num) {
    console.log(typeof numToUpdate, 'numtoL', numToUpdate);
    numToUpdate = numToUpdate.toString();
    if (numToUpdate.includes('.')) {
        if (num === ".") return numToUpdate
        return numToUpdate += num
    }
    numToUpdate += num;
    if (num === ".") return numToUpdate
        // if (Number(numToUpdate) % 1 === 0 && Number(numToUpdate) < 0) return numToUpdate
        // if (num.includes('.')) return numToUpdate
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
        console.log('Display:', displayNum, isSecondNum);
    })
});

function checkExpression(str) {
    const fourOperators = operatorBtns.map(btn => btn.textContent);


}
// If operator is clicked, moved it to upper div.
const operatorBtns = Array.from(document.querySelectorAll('.btn-operator'));
operatorBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        // console.log(checkExpression(compExpression))
        if (secondNum !== "") {
            console.log('pwede na', secondNum, firstNum)
            const sampleResult = operate(+firstNum, +secondNum, operatorValue);
            console.log(sampleResult)
            displayCompExp(sampleResult);
            storeResult(sampleResult);

        }
        operatorValue = e.target.textContent;
        compExpression = firstNum + operatorValue;
        isSecondNum = true;
        secondNum = '';
        displayCompExp(compExpression);
        displayInitExp('');
        console.log('operation', operatorValue);
        console.log('1stNum', firstNum, '2ndNum', secondNum);
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