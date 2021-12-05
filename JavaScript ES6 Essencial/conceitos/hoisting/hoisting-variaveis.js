// Hoisting: levantar ou suspender algo, em declaraçoes de variaveis ou funçoes
// o hoisting de variavel eleva somente a criação da variavel, e não a sua atribuição

function fn() {
  console.log(text); //undefined
  var text = "Exemplo";
  console.log(text); //exemplo
}

fn();
