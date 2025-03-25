// Objeto Data
// Atrib: dia, mes e ano
// Metodo: exibir -> "dia/mes/ano"

const data = {
    dia: "xx",
    mes: "yy",
    ano: "wwww",
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

data.dia = "12";

console.log(data.exibir());

