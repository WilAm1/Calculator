function assignNumEventListeners() {
    const aAllBtns = document.querySelectorAll('.num-val');

    aAllBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            const value = e.target.textContent;
            storeValue(value);

            changeInputDisplay()
        })
    });
}

function changeInputDisplay() {
    const inputTextP = document.getElementById('input-text');
    inputTextP.textContent = sUserInput;
}

function storeValue(value) {
    sUserInput += value;
    console.log(sUserInput);
}
let sUserInput = '';

const aOperatorBtns = document.querySelectorAll('.btn-operator');
const compPara = document.getElementById('computation');

aOperatorBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        compPara.textContent = sUserInput + ' ' + e.target.textContent;
        console.log(sUserInput + ' ' + e.target.textContent);
        sUserInput = '';
        changeInputDisplay()
    });
});

assignNumEventListeners();


// Display clicked btn
// If operator found, move the text content up to the display.
// Clear the input text in order for user to input again.
// First operator then evaluate the numbers when equal is called
// Make operators Work. IF 2 operators found, process the first operator
//