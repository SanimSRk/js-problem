function myFunction(laptop, tablet, mobile) {
  laptopPrice = 35000;
  tabletPrice = 15000;
  mobilePrice = 20000;
  const fristLaptop = laptop * laptopPrice;
  const fristTablet = tablet * tabletPrice;
  const fristMobile = mobile * mobilePrice;
  const tottelPrice = fristLaptop + fristTablet + fristMobile;
  return tottelPrice;
}
const result = myFunction(3, 2, 5);
console.log(result);
