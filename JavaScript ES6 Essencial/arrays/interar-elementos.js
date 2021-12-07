const frutas = ["Melancia", "Acerola", "Laranja", "Amora"];

//iterar os elementos sem alterar o array
frutas.forEach((fruta, index) => {
  console.log(index, fruta);
});

//retorna um novo array com as alteraçoes feitas
const novoArray = frutas.map((fruta, index) => `${index + 1}. ${fruta}`);

novoArray.forEach((value) => {
  console.log(value);
});

//retorna um novo array com todos os elementos de um sub-arrey concatenados de forma recursiva
const idades = [20,34,[35,60,[70,40]]]
console.log(idades.flat())
console.log(idades.flat(2))

//retorna um novo array assim como na função map com profundidade 1 do flap

const arr = [1,2,3,4]
console.log(arr)
console.log(arr.flatMap(value => [value*2]))
console.log(arr.flatMap(value => [[value*2]]))

