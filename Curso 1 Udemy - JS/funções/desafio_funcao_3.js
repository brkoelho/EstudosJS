const n1 = 7.8;
const n2 = 3.1;
const n3 = 6.7;

// // const n1 = 5.5;
// // const n2 = 4.6;
// // const n3 = 3.2;

// const n1 = 4.2;
// const n2 = 3.1;
// const n3 = 2.5;

// const n1 = 6.8;
// const n2 = 5.7;
// const n3 = 3.3;

// Calcular média usando 2 melhores nota.
// Aprovador se a média for >= 7.
// Em recuperação se média for >= 4 e <7.
// Menor que 4 reprovado.

function mediaAluno(n1, n2, n3) {
    if (n1 <= n2 && n1 <= n3) {
        mediaAluno = ((n2 + n3) / 2);
        return `A média do aluno é ${mediaAluno}`
    } else if (n2 <= n1 && n2 <= n3) {
        mediaAluno = ((n1 + n3) / 2);
        return `A média do aluno é ${mediaAluno}`
    } else if (n3 <= n1 && n3 <= n2) {
        mediaAluno = ((n1 + n2) / 2);
        return `A média do aluno é ${mediaAluno}`
    }
}
console.log(mediaAluno(n1, n2, n3));

function aprovOuReprov(mediaAluno) {
    if (mediaAluno >= 7) {
        return "O aluno está aprovado.";
    } else if (mediaAluno < 7 & mediaAluno >= 4) {
        return `O aluno está de recuperação.`;
    } else if (mediaAluno <= 4) {
        return `O aluno foi reprovado.`;
    }
}
console.log(aprovOuReprov(mediaAluno))