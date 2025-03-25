function somar1(a, b) {
    return a + b;
}

console.log(somar1(5, 4));

function somar2(a) {
    return function (b) {
        return a + b;
    }
}

console.log(somar2(5)(4))

const somarMais10 = somar2(10);

console.log(somarMais10(5));
console.log(somarMais10(15));

/// Isso serve pra fazer quebra de algoritmos e dividir as funções... Dividir para conquistar!