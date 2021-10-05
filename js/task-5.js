const str = document.querySelector('.str').textContent;
const answ = document.querySelector('.answ');
let a = 'другого'
const arr = str.split(" ");
answ.textContent = `Position "другого" in array: ${arr.indexOf(a)}. 
Position "другого" in string: ${arr.indexOf(a) +1}`;