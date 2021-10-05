const text = document.querySelector('.textCHNU').textContent;
const answ = document.querySelector('.answ');
let index = text.indexOf("Д");

let s = text.substring(0, index) + 'Н' + text.substring(index + 1);
answ.textContent = s;