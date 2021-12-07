//maneiras de se criar um array

const arr = [1, 2, 3, 4];

const arr2 = new Array(1, 2, 3, 4, 5);

const persons = Array.of("John", "Cris", "Jenny");

const numberAndString = Array.of(1, 2, "String");

const arrWith3Positions = Array(3); //Array com 3 posiçoes vazias

const personList = Array("Cris", "John", "Jenny");

const divs = document.querySelector("div"); //nodeList

const divArray = Array.from(divs); //array

const frutas = ["melancia", "banana", "caja", "acelora"];

frutas.push("laranja"); //insere no final do array
console.log(frutas.push()); //retorna tamanho do array
console.log(frutas);

frutas.pop(); //remove o ultimo item
console.log(frutas);
console.log(frutas.pop()); //remove e retorna o item removido
console.log(frutas);

frutas.unshift("maça"); //insere no inicio
console.log(frutas);

frutas.shift(); //remove do inicio
console.log(frutas);
console.log(frutas.shift()); //remove e retorna o item removido
console.log(frutas);

const salgados = ["coxinha", "quibe", "empada"];
console.log(salgados);

const alimentos = frutas.concat(salgados); //concatenar dois arrays
console.log(alimentos);

const numbers = [1, 2, 3, 4, 5];

console.log(numbers);
console.log(numbers.slice(0, 2)); //retorna os itens aparti do index 0 ate o 2
console.log(numbers.slice(2)); //retorna os itens apartir do index 2
console.log(numbers.slice(-1)); //retorna ultimo elemento do array
console.log(numbers.slice(-3)); //retorna apartir do 3 apartir da ultima posicao

const frutasSplice = ['melancia','banana']

frutasSplice.splice(1,0,'acerola') // depois do item 1 nao removeu nada e adicionou acerola
console.log(frutasSplice)

frutasSplice.splice(2,1,'laranja','amora') //depois do item 2 remover 1 item e adicionar laranja e amora
console.log(frutasSplice)