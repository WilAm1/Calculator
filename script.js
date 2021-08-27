function assignEventListener() {
    const aAllBtns = document.querySelectorAll('.btn-display');

    aAllBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            storeValue(e.target.textContent);
            changeInputDisplay()
        })
    });
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