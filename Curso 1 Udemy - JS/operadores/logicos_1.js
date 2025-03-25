let temDinheiro = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = false;

let resultadoE = "#1 Vai pro shopping? ";
resultadoE += temDinheiro && estaEnsolarado; // Esses dois E comerciais é o E...
console.log(resultadoE);

let resultadoOU = "#1 Vai pro shopping? ";
resultadoOU += estaEnsolarado || carroEstaNaGaragem; // Esses duas barras retas é o OU...
console.log(resultadoOU);

console.log(true!==true);
console.log(true!==false);
console.log(false!==true);
console.log(false!==false);

console.log("Não verdadeiro: "+!true);
console.log("Não falso: "+!false);