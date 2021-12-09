/*Symbols: maneiras de gerar um indentificador unico; 
    Não pode ser invocado usando new

*/
const uniqueId = Symbol('Hello')
const uniqueId2 = Symbol('Hello')

console.log(uniqueId)
console.log(uniqueId===uniqueId2)

const obj = {
    [uniqueId]: 'Hello'
}
console.log(obj)

/*Well known symbols: utilizados para adicionar propiedades ao seu objeto
Symbol.iterator: uma interface que permite comsumir passo a passo 
Symbol.split
Symbol.toStringTag
*/
const arr = [1,2,3,4]
const it = arr[Symbol.iterator]()

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

for (const value of arr) {
    console.log(value)
}