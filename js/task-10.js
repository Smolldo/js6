let text = document.querySelector('.text').textContent;
const answ =document.querySelector('.answ');
const split = (str) =>{
    let arr = [];
    arr = text.split(" ");
    for(const index of str)
      arr.push(index)
     
    return arr;
  }
  
  const str = "";
 answ.textContent = split(str);