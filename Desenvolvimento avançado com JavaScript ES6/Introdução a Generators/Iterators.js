/*
Symbol.iterator: uma interface que permite comsumir passo a passo 
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

//Criando função interadora em objeto literal

const obj = {
    values: [1,2,3,4],
    [Symbol.iterator](){
        let i = 0;
        return{
            next:() =>{
                i++
                return {
                    value:this.values[i-1],
                    done: i > this.values.length
                }
            }
        }
    }
}

//const i = obj[Symbol.iterator]()

for (const value of obj) {
    console.log(value)
}

const arr2 = [...obj]
console.log(arr2)