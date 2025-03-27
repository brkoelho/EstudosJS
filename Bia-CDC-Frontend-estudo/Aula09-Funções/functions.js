//Função sem parâmetros e sem retorno
function imprimir() {
  console.log("Olá mundo!");
}

imprimir();
imprimir();
imprimir();

function impressao(impressao) {
  console.log(impressao);
}

console.log("--------------------------------------------------");

function calcularSoma(a, b) {
  return a + b;
}

let a = 2;
let b = 3;
console.log(
  `O valor da soma de ${a} com ${b} é igual a ${calcularSoma(a, b)}!`
);

console.log("--------------------------------------------------");
//Essa é a maneira de usar uma função criado com outra que criamos...
impressao(`O valor da soma de ${a} com ${b} é igual a ${calcularSoma(a, b)}!`)

console.log("--------------------------------------------------");
