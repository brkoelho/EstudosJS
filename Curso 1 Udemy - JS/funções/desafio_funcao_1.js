// função: 2 params -> console.log(+)
// função: 2 params -> console.log(-)

const x1 = 10;
const x2 = 11;
const y1 = 12;
const y2 = 13;

function somarValores(x, y) {
    console.log(`A soma do valor ${x} com ${y} é igual a: ${x + y}.`);
}

function subtrairValores(x, y) {
    console.log(`A subtração do valor ${x} com ${y} é igual a: ${x - y}.`);
}

somarValores(x1,y1);
somarValores(x2,y2);
subtrairValores(x1,y1);
subtrairValores(x2,y2);