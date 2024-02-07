function myFunction(num1, num2) {
  const multipay = num1 * num2;
  return multipay;
}
const resutl = myFunction(10, 5);
console.log(resutl);
function odeNumber(even) {
  if (even % 2 === 1) {
    let sum = even * 2;
    return sum;
  } else {
    let evend = even / 2;
    return evend;
  }
}
const resutld = odeNumber(9);
console.log(resutld);
function findingSmallest(numbers) {
  let sum = numbers[0];
  for (const num of numbers) {
    if (num < sum) {
      sum = num;
    }
  }
  return sum;
}

console.log(findingSmallest([10, 33, 5, 99, 6]));

function leafYear(year) {
  let sum = [];
  for (const num of year) {
    if (num % 4 === 0) {
      sum.push(num);
    }
  }
  return sum;
}
console.log(leafYear([2023, 2024, 2025, 2028, 2030]));

function findOddSum(arrOfNumbers) {
  let sum = 0;
  for (const num of arrOfNumbers) {
    if (num % 2 === 1) {
      sum = sum + num;
    }
  }
  return sum;
}
console.log(findOddSum([5, 7, 8, 10, 45, 30]));
