// Um capital de R$2500 foi investido a juros compostos por 36 meses, com taxa de juros de 12% a.a.
// C = 2500, i = 12%, t = 36 meses (3 anos).

//formula = 2500 (1,12) a 3a potencia.
let c = 2500;
let potencia = Math.pow(1.12, 3);
console.log(potencia);

let resultado = 2500 * 1.404928;
console.log(resultado);

console.log(resultado - c);

console.log(`O valor dos juros é de ${1012.32}.`);
