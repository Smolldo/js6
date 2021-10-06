const strInp = document.querySelector('.insertSymbols');
const answ = document.querySelector('.answer');

const onType = (event) => {
    const inValue = event.currentTarget.value;
    inValue ? answ.textContent = `Current string value: ${inValue.length}`:
    inValue.textContent = "";
}



strInp.addEventListener('input', onType);