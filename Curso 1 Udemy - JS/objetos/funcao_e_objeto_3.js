//Função Construtora -> Objeto
function Data(dia = 1, mes = 1, ano = 2021) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
    this.exibir = function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d1 = new Data();
d1.ano = 9999;
d1.dia = 7;
const d2 = new Data(1, 11, 1111);
d1.dia = 9;
const d3 = new Data(2, 22, 2222);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
console.log(d1);
console.log(d2);
console.log(d3);
