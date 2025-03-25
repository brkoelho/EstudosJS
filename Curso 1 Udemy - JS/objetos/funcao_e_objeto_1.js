function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function () {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    };
}

const d1 = criarData(1, 11, 1111)
const d2 = criarData(2, 22, 2222)
const d3 = criarData(4, 44, 4444)

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());