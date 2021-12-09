//Sem o uso de Destructuring Assignment

var arr = ["Apple", "Banana", "Orange", ["tomato"]];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

//Usando Destructuring Assignment

var [apple2, banana2, laranja2, [tomato2]] = [
  "Apple",
  "Banana",
  "Orange",
  ["Tomato"],
];

console.log(apple, apple2);

//Utilizando Destructuring Assignment em Objetos
var obj = {
  nome: "Jorge",
  props: {
    idade: 22,
    favoriteColors: ["black", "blue"],
  },
};
var { nome } = obj;
var {
  props: { idade },
} = obj;

console.log(nome);
console.log(idade);

//Utilizando Destructuring Assignment em array de Objetos

var {
  props: {
    favoriteColors: [color1, color2],
  },
} = obj;

console.log(color1,color2)

//Objetos dentro de um array

var arr = [{name:'orange',type:'fruit'}]

var [{name}] = arr
console.log(name)

//Em funçoes

function sum([a,b]=[0,0]) {
    return a+b
}

console.log(sum([4,2]))

function multi({a,b}){
    return a*b
}

console.log(multi({a:4,b:2}))