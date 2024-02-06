function myFunction(arry, total) {
  if (arry.length === 0) {
    return 'this arry is empt';
  }

  let sum = 0;
  for (let i = 0; i < arry.length; i++) {
    const vlus = arry[i];
    sum = sum + vlus;
  }

  if (sum >= total) {
    return true;
  } else {
    return false;
  }
}
const resutl = myFunction([1, 5, 5], 10);
console.log(resutl);
