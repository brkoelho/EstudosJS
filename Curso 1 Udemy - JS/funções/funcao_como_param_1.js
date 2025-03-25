function executar(funcao) {
    if (typeof funcao === "function") {
        console.log(funcao());  // <--- é o centro dessa aula...
    }
}

function bomDia() {
    return "Bom dia";
}

executar(3);
executar(bomDia); // <--- é o centro dessa aula...

const x = bomDia;
const y = bomDia();

console.log(x());
console.log(y);