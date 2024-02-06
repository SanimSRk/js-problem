function myFunction(sicty) {
  const state = sicty.state || ' __';
  const house = sicty.house || ' __';
  const socite = sicty.socite || ' __';

  const resutl = state + ',' + house + ',' + socite;
  console.log(resutl);
}
const sicty = { state: 10, socite: 'comen socite' };
const resutl = myFunction(sicty);
