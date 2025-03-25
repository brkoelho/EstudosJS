// let a = 1;
// let b = 2;
// a++;
// b++;
// console.log(a == b);

let a = 1;
let b = 2;
console.log(++a === b++); // === tem mais prioridade que b++, mesmo que no fim a=2 e b=3 (Código CONFUSO para o PROF)
                          //++a acontece primeiro que a++