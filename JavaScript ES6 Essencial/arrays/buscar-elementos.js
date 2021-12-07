const arr = [1,2,3,4]

//retorna o primeiro intem encontrada que satisfaça a condição imposta
const maiorQ2 = arr.find(value => value >2)
console.log(maiorQ2)

//retorna o index do item encontrado
const numPar = arr.findIndex(value => value%2==0)
console.log(numPar)

//retorna um novo array com todos os elemtos de um array que satisfaça determinada condição
const impar = arr.filter(value => value%2!=0)
console.log(impar)

//retorna o primeir inice em que um elemento pode ser encontrado em um array
const arr2 = [1,2,3,2,3,5,3]

const primeiro3 = arr2.indexOf(3)
console.log(primeiro3)

//index da ultima ocorrencia de determinado elemento
const ultimo3 = arr2.lastIndexOf(3)
console.log(ultimo3)

//verifica se determinado item existe no array
const temNum9 = arr2.includes(9)
console.log(temNum9)

//verifca se pelo menos um item do array satifaz determinada condição
const temAlgumNumPar = arr2.some(value => value%2==0)
console.log(temAlgumNumPar)

//verifica se TODOS os itens satisfazem a condião 
const todosNumPar = arr2.every(value => value%2==0)
console.log(todosNumPar)


