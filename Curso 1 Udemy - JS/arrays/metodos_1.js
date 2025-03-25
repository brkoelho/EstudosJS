const numeros = [1, 2, 3, 4, 5, 4];

numeros.push(6); // Adiciona o número 6 no array.
numeros[0] = 100; // Troca o elemento na posição 0 (na primeira posição) para "100".
console.log(numeros.join(" - ")); // Faz uma string de todos os elementos do array usando a string entre eles que foi colocado no argumento.
const numeros2 = numeros.concat(7, 8, 9); // Apenas concatena novos elementos gerando um novo array.
console.log(numeros2); // Não modifica o array inicial numeros.
console.log(numeros.includes(10)); // Ele checa se o elemento está ou não no array.
console.log(numeros.includes(3)); // Ele checa se o elemento está ou não no array.
console.log(numeros.indexOf(4)); // Ele te fala qual o índice do elemento de valor 4.
console.log(numeros.indexOf(4, 4)); // Ele te fala qual o índice do elemento de valor 4 -> A partir do QUARTO elemento. (Pode ser negativo)
