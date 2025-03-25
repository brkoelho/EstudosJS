// Parâmetro (Nota) -> Retorna (Conceito)

// A+ -> 10
// A -> 9
// B+ -> 8
// B -> 7
// C+ -> 6
// C -> 5
// D+ -> 4
// D -> 3
// E+ -> 2
// E -> 1
// F -> 0

let nota = 7.5;
function conceito(nota) {
    if (nota === 10) {
        return `O conceito é A+.`;
    } else if (Math.ceil(nota) === 9) {
        return `O conceito é A.`;
    } else if (Math.ceil(nota) === 8) {
        return `O conceito é B+.`;
    } else if (Math.ceil(nota) === 7) {
        return `O conceito é B.`;
    } else if (Math.ceil(nota) === 6) {
        return `O conceito é C+.`;
    } else if (Math.ceil(nota) === 5) {
        return `O conceito é C.`;
    } else if (Math.ceil(nota) === 4) {
        return `O conceito é D+.`;
    } else if (Math.ceil(nota) === 3) {
        return `O conceito é D.`;
    } else if (Math.ceil(nota) === 2) {
        return `O conceito é E+.`;
    } else if (Math.ceil(nota) === 1) {
        return `O conceito é E.`;
    } else if (Math.ceil(nota) === 0) {
        return `O conceito é F.`;
    }
}
console.log(conceito(nota));


