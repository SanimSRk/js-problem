function myFunctiond(num) {
  let sum = Math.pow(num, 3);
  return sum;
}
const resutld = myFunctiond(4);
console.log(resutld);

function myFunction(str, strin) {
  if (typeof str !== 'string' || typeof strin !== 'string') {
    return 'this input is not string';
  }
  const num = str.includes(strin);
  return num;
}

const resutl = myFunction('sanim', 'sanim');
console.log(resutl);
