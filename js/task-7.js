const text = document.querySelector('.text').textContent;
const sp = document.querySelector('.TF');
const substr = "quo";

text.includes(substr) ? sp.textContent = `Text includes` : `Text not includes`;