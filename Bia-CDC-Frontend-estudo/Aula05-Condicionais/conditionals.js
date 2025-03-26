const idadeMaria = 16;
const maioridade = 18;

//Inicio da aula ela começou assim:
// console.log(`Maria pode dirigir? ${idadeMaria >= 18}`);

if (idadeMaria >= 18) {
  console.log("Maria pode dirigir!");
} else {
  const anosFaltantes = maioridade - idadeMaria;
  console.log("Maria não pode dirigir!");
  console.log(`Falta(m) ${anosFaltantes} anos para Maria poder dirigir!`);
}

//Operadores ternários
// idadeMaria >= maioridade
//   ? console.log("Maria pode dirigir!")
//   : console.log("Maria não pode dirigir!");

console.log("--------------------------------------------------");
// 0 a 12 anos -> infância
// 13 a 17 anos -> adolescência
// 18 a 25 anos -> jovem adulto
// 26 a 60 anos -> adulto
// mais que 60 anos -> idoso

const idadePessoa = 15;
if (idadePessoa >= 0 && idadePessoa <= 12) {
  console.log("Infância!");
} else if (idadePessoa >= 13 && idadePessoa <= 17) {
  console.log("Adolescência!");
} else if (idadePessoa >= 18 && idadePessoa <= 25) {
  console.log("Jovem adulto!");
} else if (idadePessoa >= 26 && idadePessoa <= 60) {
  console.log("Adulto!");
} else {
  console.log("Idoso!");
}

console.log("--------------------------------------------------");

//Atenção que no ifelseif ele para o código quando acha o true...
//Em certos casos pode ser necessário usar vários ifs ao invés dessa estrutura...
//Segue exemplo:

const x = 20;
if (x % 2 === 0) {
  console.log(`O número ${x} é par.`);
}
if (x % 5 === 0) {
  console.log(`O número ${x} é divisível por 5.`);
}

console.log("--------------------------------------------------");

const diaDaSemana = 3;
let nomeDoDia;

switch (diaDaSemana) {
  case 0:
    nomeDoDia = "Domingo";
    break;
  case 1:
    nomeDoDia = "Segunda";
    break;
  case 2:
    nomeDoDia = "Terça";
    break;
  case 3:
    nomeDoDia = "Quarta";
    break;
  case 4:
    nomeDoDia = "Quinta";
    break;
  case 5:
    nomeDoDia = "Sexta";
    break;
  case 6:
    nomeDoDia = "Sábado";
    break;
}

console.log(`Dia da semana é ${nomeDoDia}.`);
