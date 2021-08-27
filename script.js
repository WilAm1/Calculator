// Acquire displayable btns

const btnDisplayableArr = Array.from(document.querySelectorAll('.btn-display'));
console.log(btnDisplayableArr);
const inputText = document.querySelector('#input-text');

// Display Input into the input Paragraph

let initialNum = ''
btnDisplayableArr.forEach(btn => {
    btn.addEventListener('click', e => {
        initialNum += e.target.textContent;
        inputText.textContent = initialNum;
    })
});

// If operator is found, move it to computation p
// make input P displayable again.