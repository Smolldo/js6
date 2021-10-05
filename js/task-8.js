const inpMail = document.querySelector('.userMail');
const befSob = document.querySelector('.befAT');
const aftSob = document.querySelector('.aftAT');
const btn = document.querySelector('.btn');

const cutCut = () =>{
    befSob.textContent = `Cutted mail befor "@": ${inpMail.value.split('@')[0]}.`;
    aftSob.textContent = `Cutted mail aftr "@": ${inpMail.value.split('@')[1]}`
}

btn.addEventListener('click', cutCut);
