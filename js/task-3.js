const str = document.querySelector('.string_mas').textContent;
const innerSpan = document.querySelector('.answer');

const countChars_long = (str) => {
    let result = {};
    let chars = str.split("");
    for (let i = 0; i < chars.length; i++) {
      let count = result[chars[i]]? result[chars[i]] : 0;
      result[chars[i]] = count + 1; 
    }
    return result;
  }
  
  function countChars_short(str) {
    return str.split("").reduce((r, c) => (r[c] = (r[c] || 0) + 1, r), {});
  }

  console.log(countChars_long(str))