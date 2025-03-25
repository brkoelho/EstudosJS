const a = 10;
const b = 28;
const operacao = "%"; // + - * / %

if (operacao === "+") {
    resultado = a + b;
} else if (operacao === "-") {
    resultado = a - b;
} else if (operacao === "*") {
    resultado = a * b;
} else if (operacao === "/") {
    resultado = a / b;
} else if (operacao === "%") {
    resultado = a % b;
}
console.log("O resultado é: " + resultado);