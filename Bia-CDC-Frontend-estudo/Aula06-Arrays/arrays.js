const listaDeConvidados = ["Matheus", "Amanda", "Paula", "Izabelli"];
console.log(`Bia fez aniversário e convidou ${listaDeConvidados}`);
console.log(`Quantos convidados? ${listaDeConvidados.length}`);
console.log(`Quantos convidados? ${listaDeConvidados.length}`);
console.log(`Convidado(a) número 1 é o(a) ${listaDeConvidados[0]}`);
console.log(`Convidado(a) número 1 é o(a) ${listaDeConvidados[1]}`);
console.log(`Convidado(a) número 1 é o(a) ${listaDeConvidados[2]}`);
console.log(`Convidado(a) número 1 é o(a) ${listaDeConvidados[3]}`);
//O último pode ser acessado usando:
console.log(
  `O último da lista de convidados é ${
    listaDeConvidados[listaDeConvidados.length - 1]
  }`
);

//Acbar a posição do convidado:
console.log(
  `Amanda esta em qual índice do nosso array? Posição de número: ${listaDeConvidados.indexOf(
    "Amanda"
  )}`
);

//Os arrays podem ter de vários tipos...
const arrayQualquer = ["Beatriz", true, 25, [(valor = 1), (valor = 2)]];
console.log(arrayQualquer);
