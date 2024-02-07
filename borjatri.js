function myFunction(borjatri) {
  const reminingBorjatri = borjatri % 50;
  const borjatritempo = reminingBorjatri % 17;
  const goTheauto = borjatritempo * 25;
  return goTheauto;
}
const resutl = myFunction(221);
console.log('total auto borjatri price:', resutl, 'taka');
