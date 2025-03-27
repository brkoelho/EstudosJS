//Escopos

//Escopo: Global - Bloco - Função

const x = "variavel global";

//escopo de bloco
if (x) {
  const z = "variavel de bloco.";
  console.log(`X é ${x}.`);
  console.log("A variável z é : ",z);
}

//escopo de função
const funcao = () => console.log(`X é ainda ${x}.`);
funcao();

//Hoisting
//Declarar com let ou const e não usar var...
//Colocar as let ou const declaradas no início...
//Var aparece undefined...
