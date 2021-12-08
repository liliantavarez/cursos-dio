function log(value) {
  console.log(value);
}

log("Função Classica");

var log = function (value) {
  console.log(value);
};
log("Função Anonima");

var sum = function (a, b) {
  return a + b;
};

console.log(sum(7, 3));

/* Arrow Functions
    - Em funçoes com apenas 1 argumento os parênteses podem ser omitidos
    - Não possui hoisting como as funçoes clássicas
*/

var logArrow = (value) => console.log(value);

logArrow("Arrow Function");

var sumArrowFun = (a, b) => a + b;

console.log(sumArrowFun(8, 9));

var maiorValor = (a, b) => {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "Valores iguais";
  }
};

console.log(maiorValor(1, 6));

//Criando objetos com função construtora
function Car() {
  this.foo = "bar";
}
console.log(new Car());

/*Não é possivel fazer com array funtion
var CarA = () => {
  this.foo = "bar";
};
console.log(new CarA());
*/

//construção de objeto com funçoes como propriedades
var obj = {
  showContext: function showContext() {
    this.log("Teste"); //o this faz referencia a seu proprio objeto, devido ao contexto de invocação
    
    setTimeout( () => {
      this.log("After 1000ms", 1000);
    });
  },
  log: function log(value) {
    console.log(value);
  },
};

obj.showContext();
