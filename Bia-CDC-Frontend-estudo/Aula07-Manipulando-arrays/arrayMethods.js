const listaDeConvidados = ["Matheus", "Amanda", "Paula", "Izabelli"];

//Push / Pop / Shift / Unshift

console.log("Arrays são do tipo: ", typeof listaDeConvidados, "!");

console.log("--------------------------------------------------");

listaDeConvidados.push("Leonardo"); //Add no final do array
listaDeConvidados.pop(); //Remove no final do array
listaDeConvidados.pop(); //Removemos mais um...
console.log(listaDeConvidados);

console.log("--------------------------------------------------");

listaDeConvidados.unshift("Lolzeiro"); //Add na 1ª pos do array
console.log(listaDeConvidados);

console.log("--------------------------------------------------");

listaDeConvidados.shift(); //Remove o elemento da 1ª pos do arrat
console.log(listaDeConvidados);

console.log("--------------------------------------------------");

console.log("Amanda está na lista?", listaDeConvidados.includes("Amanda"));
