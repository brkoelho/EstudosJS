function executar(fn, n1 = 5, n2 = 10) {
    if (typeof fn === "function") {
        console.log(fn(n1, n2));
    }
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

executar(somar, 40, 50);
executar(subtrair, 50, 100);
executar(multiplicar, 30, 50);
executar(somar); // Isso daqui sem passar parâmetro ele usa o valor padrão que coloquei lá no parâmetro.