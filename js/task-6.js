const text = document.querySelector('.textCHNU').textContent;
const answ = document.querySelector('.answ');

const arr = text.split(" ");
console.log(arr)
console.log(arr.join(' '))

arr.forEach(e=>{
   let b = e.replace("Д","Н");
  console.log(b)
})
