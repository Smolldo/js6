let inpVal = document.querySelector('.usInp');
const answ =document.querySelector('.answ');

const spaces =(e) =>{
    inpVal = e.currentTarget.value;
    inpVal ? answ.textContent = inpVal.split("").join(" ") : console.log("zaz")
}

inpVal.addEventListener('input', spaces)