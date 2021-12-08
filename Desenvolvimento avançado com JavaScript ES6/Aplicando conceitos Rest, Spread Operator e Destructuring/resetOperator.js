//Maneira iperativa; propriedade arguments não existe em array function
function sum(a, b){
  var value = 0;
  for (var i = 0; i < arguments.length; i++) {
    value += arguments[i];
  }
  return value;
};

console.log(sum(5, 2, 3, 1, 5));

/*
 REST OPERATOR 
  - Pega todos os parametros de uma função e transforma em um array
*/

const soma = (...args) => args.reduce((total,value)=>total+=value,0)

const multi = (...args) => args.reduce((total,value)=>total*=value,1)

console.log(soma(1,2,3,4,5,6))
console.log(multi(1,2,3,4,5,6))