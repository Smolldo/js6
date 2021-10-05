let text = document.querySelector('.text').textContent;
const answ =document.querySelector('.answ');
const split = (str) =>{
    let arr = [];
    arr = text.split(" ");
    for(const char of str)
      arr.push(char)
     
    return arr;
  }
  
  const str = "";
 answ.textContent = split(str);