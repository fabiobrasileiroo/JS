const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número real: ', (numero) => {
  let quinta_parte = numero / 5;
  console.log(`A quinta parte de ${numero} é ${quinta_parte.toFixed(5)}`);
  rl.close();
});