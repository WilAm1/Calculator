function assignEventListener() {
    const aAllBtns = document.querySelectorAll('.btn');

    aAllBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            storeValue(e.target.textContent);
        })
    });
}

function storeValue(value) {
    sUserInput += value;
    console.log(sUserInput);
}
let sUserInput = '';

assignEventListener();