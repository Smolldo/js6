const refs = {
    textField: document.querySelector('.lorem_text').textContent.toLowerCase(),
    clickButton: document.querySelector('.btn'),
    innerSpan: document.querySelector('.innerAnswer')

}
console.log(refs.textField.toLowerCase())
const howMuch = () =>{
    let ans = refs.textField.split('lorem').length -1;
    refs.innerSpan.textContent = `Lorem in text: ${ans} times`;
}


refs.clickButton.addEventListener("click", howMuch);


