var nota = 0;
if (nota > 9 && nota <= 10) {
    conceito = ("A");
}
if (nota > 7 && nota <= 9) {
    conceito = ("B");
}
if (nota > 5 && nota <= 7) {
    conceito = ("C");
}
if (nota > 4.5 && nota <= 5) {
    conceito = ("D");
}
if (nota >= 0 && nota < 4.5) {
    conceito = ("F");
}
if (nota < 0) {
    conceito = ("nota inválida");
}
console.log("Sendo a nota igual a: " + nota + " então o conceito é: " + conceito + ".")
