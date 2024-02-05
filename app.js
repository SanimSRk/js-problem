//sampole problem//
function singariPrice(pric1, pric2, pric3) {
  singeraPrice = 7;
  sumcaPrice = 10;
  gilapiPrice = 15;

  const singari = singeraPrice * pric1;
  const sumoca = sumcaPrice * pric2;
  const gilapi = gilapiPrice * pric3;

  const tottelPrice = singari + sumoca + gilapi;
  return tottelPrice;
}
const resutl = singariPrice(4, 3, 2);
console.log(`tottel price`, resutl);
