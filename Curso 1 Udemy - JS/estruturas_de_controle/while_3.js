//O Date.now() mostra a quantidade de milisegundos desde o dia 1o de Janeiro de 1970 (Unix)
const futuro = Date.now() + 2000;
let quantidade = 0;

while (Date.now() < futuro) {
    quantidade++;
}
console.log("Quantidade: "+quantidade);
