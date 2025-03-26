const fichaDabia = {
    nome: "Beatriz",
    idade: 24,
    profissao: "programadora",
    temFilhos: false,
};

console.log("Ficha da Bia: ", fichaDabia);
console.log("Nome: " + fichaDabia.nome);

fichaDabia.carro = "Yáris";

console.log("Ficha da Bia", fichaDabia);

delete fichaDabia.carro;

console.log(fichaDabia.carro);