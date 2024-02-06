function myFunction(arry) {
  const [a, b] = arry;
  if (a < 0 || b < 0) {
    return 'invlide code ';
  }

  if (a === b) {
    return 'equled';
  }

  if (a > b) {
    return [a, b];
  } else {
    return [b, a];
  }
}
const resutl = myFunction([2, 4]);
console.log(resutl);
