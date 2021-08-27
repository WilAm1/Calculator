// Acquire displayable btns

const btnDisplayableArr = Array.from(document.querySelectorAll('.btn-display'));
console.log(btnDisplayableArr);
const inputTextDOM = document.querySelector('#input-text');

// Display Input into the input Paragraph

function displayInitExp(num) {
    if (!isSecondNum) {
        initialNum += num;
        inputTextDOM.textContent = initialNum;
        console.log(initialNum)

    } else {
        storedNum += num;
        inputTextDOM.textContent = storedNum;
        console.log(storedNum);
    }
}

function displayCompExp(operator) {
    const computationDOM = document.querySelector('#computation');
    // storedNum = initialNum;
    compExpression = initialNum + operator;
    computationDOM.textContent = compExpression;
    // initialNum = '';

}

let initialNum = '';
let isSecondNum = false;
let storedNum = '';
let operatorValue = '';
let compExpression = '';
let result = 0;
btnDisplayableArr.forEach(btn => {
    btn.addEventListener('click', e => {
        displayInitExp(e.target.textContent);
    })
});

// If operator is found, move it to computation p

const btnOperators = Array.from(document.querySelectorAll('.btn-operator'));
console.log(btnOperators)

btnOperators.forEach(btn => {
    btn.addEventListener('click', e => {
        operatorValue = e.target.textContent;
        displayCompExp(operatorValue);
        console.log(operatorValue);
        isSecondNum = true;
        // acceptNext

    })
});
// make input P displayable again.