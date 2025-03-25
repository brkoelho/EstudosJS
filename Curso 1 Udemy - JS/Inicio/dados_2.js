console.log(19.9 * 0.6);

let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

let nome = "Caderno";
let categoria = "Papelaria";
console.log("Produto: " + nome    //Strings são sequência de símbolos      
    + ", Categoria: " + categoria //Esse + é usado para concatenar no JavaScript
    + ", Preço: " + preco
    + ", Desconto: " + desconto);