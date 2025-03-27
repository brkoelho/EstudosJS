const notasFinais = [
  { nome: "Beatriz", nota: 5 },
  { nome: "Matheus", nota: 7 },
  { nome: "Amanda", nota: 10 },
  { nome: "Paula", nota: 5 },
];

//METODO FOR...

for (let i = 0; i < notasFinais.length; i++) {
  if (notasFinais[i].nota >= 6) {
    console.log(
      `O(a) aluno(a) ${notasFinais[i].nome} está aprovado(a) com a nota ${notasFinais[i].nota}!`
    );
  } else {
    console.log(
      `O(a) aluno(a) ${notasFinais[i].nome} reprovou com a nota ${notasFinais[i].nota}!`
    );
  }
}

console.log("--------------------------------------------------");

//METODO FOR OF...

for (let aluno of notasFinais) {
  if (aluno.nota >= 6) {
    console.log(`O aluno ${aluno.nome} está aprovado com ${aluno.nota}`);
  } else {
    console.log(`O aluno ${aluno.nome} está reprovado com ${aluno.nota}`);
  }
}

console.log("--------------------------------------------------");

//METODO FOREACH... FUNDAMENTAL...

notasFinais.forEach((aluno) => {
  if (aluno.nota >= 6) {
    console.log(`O aluno ${aluno.nome} está aprovado com ${aluno.nota}`);
  } else {
    console.log(`O aluno ${aluno.nome} está reprovado com ${aluno.nota}`);
  }
});
