const argument = process.argv.slice(2);

function calcCircle(r) {
  return Math.PI * (r * r);
}
calcCircle(argument[0]);
