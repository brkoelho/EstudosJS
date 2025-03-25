const d1 = {
    dia: 1,
    mes: 11,
    ano: 1111,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

const d2 = {
    dia: 2,
    mes: 22,
    ano: 2222,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

const d3 = {
    dia: 3,
    mes: 33,
    ano: 3333,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());