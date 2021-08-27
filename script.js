function assignNumEventListeners() {
    const aAllBtns = document.querySelectorAll('.num-val');

    aAllBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            const value = e.target.textContent;
            storeValue(value);
            changeInputDisplay(sUserInput)
        })
    });
}

function changeInputDisplay(str) {
    const inputTextP = document.getElementById('input-text');
    inputTextP.textContent = str;
}

function changeComputeDisplay(num) {
    const compPara = document.getElementById('computation');
    // tempNum = +sUserInput;
    compPara.textContent = num;

}

function storeValue(value) {
    sUserInput += value;
    console.log(sUserInput);
}

function operate() {
    const result = (operator === '+') ? +tempNum + +sUserInput :
        (operator === '-') ? +tempNum - +sUserInput :
        (operator === '*') ? +tempNum * +sUserInput :
        (operator === '/') ? +tempNum / +sUserInput : null
    console.log(result)
    stringOperation = tempNum + operator + sUserInput;
    return result
}

function displayResult(result) {
    sUserInput = result;
    changeInputDisplay(result);
    changeComputeDisplay(stringOperation);
}

let sUserInput = '';
let tempNum = 0;
let operator = '';
let stringOperation = '';
const aOperatorBtns = document.querySelectorAll('.btn-operator');

aOperatorBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        changeComputeDisplay(e.target.textContent);
        operator = e.target.textContent;
        sUserInput = '';
        changeInputDisplay()
    });
});



const equalBtn = document.querySelector('.btn-equal');
equalBtn.addEventListener('click', e => {
    const result = operate();
    displayResult(result);
});
assignNumEventListeners();






// Display clicked btn
// If operator found, move the text content up to the display.
// Clear the input text in order for user to input again.
// First operator then evaluate the numbers when equal is called
// Make operators Work. IF 2 operators found, process the first operator
//