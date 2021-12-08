/*
    SPREAD OPERATOR

    - Pega todos os itens de um array e tranforma em parametros em determinada funcao
    - Pode ser utilizado em strings, arrays, objetos literais e objetos interaveis
*/

const srt = 'Digital Innovation One'

function logArgs(...args){
    console.log(args)
}

logArgs(...srt)
const arr = [1,2,3,4]

logArgs(...arr)
logArgs(arr)

//construindo array combinado com outro array de forma lireal

const arr2 = arr.concat([5,6,7,8])

console.log(arr2)

//usando spread
const arr3 = [...arr,5,6,7]
console.log(arr3)

const arr4 = [...arr,6,7,8,9,10,...arr2,...arr3,8,9,10]
console.log(arr4)

const arrClone = [...arr]
console.log(arrClone)

//Usando na criação de obejetos

const obj = {
    test: '123'
}

const obj2={
    ...obj,
    test2:'456'
}

console.log(obj2.test)
















