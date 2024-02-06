const phones = [
  { model: 'PhoneA', brand: 'Iphone', price: 95000 },
  { model: 'PhoneB', brand: 'Samsung', price: 40000 },
  { model: 'PhoneC', brand: 'Oppo', price: 26000 },
  { model: 'PhoneD', brand: 'Nokia', price: 35000 },
  { model: 'PhoneE', brand: 'Iphone', price: 105000 },
  { model: 'PhoneF', brand: 'HTC', price: 48000 },
];
function myFunction(arry) {
  let sum = 0;
  for (const num of arry) {
    sum = sum + num.price / arry.length;
  }
  return sum;
}
const resutl = myFunction(phones);

console.log(resutl);

// second problem im a tray to now solving this problem

const employees = [
  { name: 'shahin', experience: 5, starting: 20000, increment: 5000 },
  { name: 'shihab', experience: 3, starting: 15000, increment: 7000 },
  { name: 'shikot', experience: 9, starting: 30000, increment: 1000 },
  { name: 'shohel', experience: 0, starting: 29000, increment: 4000 },
];

function employeesSilery(silery) {
  let sum = 0;
  for (const num of silery) {
    const valus = num.increment * num.experience + num.starting;
    sum = sum + valus;
  }
  return sum;
}
const resutld = employeesSilery(employees);
console.log(resutld);
