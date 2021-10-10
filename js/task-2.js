const refs ={
    userInput: document.querySelector('.userText'),
    clickButton: document.querySelector('.btn'),
    letSpan: document.querySelector('.letters'),
    symSpan: document.querySelector('.symbols'),
    numSpan: document.querySelector('.numbers')
};

const calc = () =>{
    const l= refs.userInput.value.match(/[A-Za-zА-Яа-яЁё]/g).length;
    const s = refs.userInput.value.match(/[0-9]/g).length;
    refs.letSpan.textContent = `Symbols in string: ${l}`;
    refs.symSpan.textContent = `Numbers in string: ${s}`;
};

refs.clickButton.addEventListener('click', calc);