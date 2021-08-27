function assignEventListener() {
    const aAllBtns = document.querySelectorAll('.btn-display');

    aAllBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            const value = e.target.textContent;
            storeValue(value);
            changeInputDisplay()
            checkOperator()
        })
    });
}

function checkOperator() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators.find(x => sUserInput.split('').includes(x));
    if (operator) console.log(operator)
}

function storeValue(value) {
    sUserInput += value;
    console.log(sUserInput);
}
let sUserInput = '';

function changeInputDisplay() {
    const inputTextP = document.getElementById('input-text');
    inputTextP.textContent = sUserInput;
}

assignEventListener();