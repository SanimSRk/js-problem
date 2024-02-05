function ficnaceBujest(prakince) {
  let first100cost = 0;
  let second200cost = 0;
  let reminingCost = 0;
  const tottelcost = 0;

  if (prakince <= 100) {
    first100cost = prakince * 5000;
    return first100cost;
  } else if (prakince <= 200) {
    first100cost = 5000 * 100;
    second200cost = prakince - 100 * 4000;
    tottelcost = first100cost + second200cost;
    return tottelcost;
  } else if (prakince > 200) {
    first100cost = 5000 * 200;
    second200cost = 4000 * 100;
    reminingCost = prakince - 200 * 3000;
    tottelcost = first100cost + second200cost + reminingCost;
    return tottelcost;
  }
}
const resutl = ficnaceBujest(100);
console.log(resutl);
