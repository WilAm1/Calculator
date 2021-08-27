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

function compute() {
    // 
}
let initialNum = '';
let isSecondNum = false;
let storedNum = '';
let operatorValue = '';
let compExpression = '';
let result = 0;

btnDisplayableArr.forEach(btn => {
    btn.addEventListener('click', e => {
        const num = e.target.textContent;
        let updateNum = '';
        if (!isSecondNum) {
            initialNum += num;
            updateNum = initialNum;

        } else {
            storedNum += num;
            updateNum = storedNum;
        }
        displayInitExp(updateNum);
        console.log(updateNum, isSecondNum);
    })
});

// If operator is found, move it to computation p
const btnOperators = Array.from(document.querySelectorAll('.btn-operator'));
btnOperators.forEach(btn => {
    btn.addEventListener('click', e => {
        operatorValue = e.target.textContent;
        compExpression = initialNum + operatorValue;
        displayCompExp(compExpression);
        console.log(operatorValue);
        isSecondNum = true;
        displayInitExp('');
        console.log(',nadfasf', initialNum);
    })
});

// make input P displayable again.
// 

// Compute total
const equalBtn = document.querySelector('.btn-equal');