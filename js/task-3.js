const str = document.querySelector('.string_mas').textContent;
const innerSpan = document.querySelector('.answer');

var result = [...str].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
console.log(result);
innerSpan.textContent = `Count of a: ${result.a}. Count of b: ${result.b}.
Count of c: ${result.c}. Count of d: ${result.d}. Count of e: ${result.e}.`;