const cliente = {
    nome: "Ana",
    codigo: 16532,
    endereco: {
        logradouros: "Rua ABC",
        numero: 123,
        complemento: "Apto 101 Bloco B",
        pontosRef: [
            { nome: "Hospital X", muitoProximo: true },
            { nome: "Shopping Y", muitoProximo: false }
        ],
    },
    nomeFilhos: ["Bia", "Carlos", "Gabriel"]
};

console.log(cliente["endereco"]["logradouros"]);
console.log(cliente.endereco.logradouros);
console.log(cliente.endereco.pontosRef[0].muitoProximo);
