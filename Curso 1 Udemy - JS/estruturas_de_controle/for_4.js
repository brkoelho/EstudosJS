// [1,1], [1,2], [1,3]
// [2,1], [2,2], [2,3]
// [3,1], [3,2], [3,3]]

// Fiz assim:
// for (let i = 1; i <= 3; i++) {
//     let linha = `[${i},1], [${i},2], [${i},3]`;
//     console.log(linha)
// }

// Professor queria na real que fizesse assim, dois laços:
// A maneira dele é bem mais geral de fato.
for (let i = 1; i <= 3; i++) {
    let linha = "";
    for (let j= 1; j <= 3; j++) {
        linha += `[${i},${j}]`;
    }
    console.log(linha);
}