const vawel = 'banglad desh is very popular country in the world';
function myFunction(vowels) {
  const valweld = ['a', 'e', 'i', 'o', 'u'];
  const vlus = vowels.split('');
  let sum = 0;
  for (let num of vlus) {
    if (valweld.includes(num)) {
      sum++;
    }
  }
  return sum;
}
const resutl = myFunction(vawel);
console.log(resutl);
const sample = ' I am learning Programming to become a programmer';
function searchLargestWord(word) {
  const valus = word.split(' ');
  let sum = '';
  for (let i = 0; i < valus.length; i++) {
    if (valus[i].length > sum.length) {
      sum = valus[i];
    }
  }
  return sum;
}
const resutled = searchLargestWord(sample);
console.log(resutled);
