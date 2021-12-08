//atribuindo valor padrão em um parametro
const mult = (a=1,b) =>{
    return a*b
} 

console.log(mult(undefined,3))

const mult = (a,b=1) =>{
    return a*b
} 

console.log(mult(4,undefined))

const mult = (a,b=a) =>{
    return a*b
} 

console.log(mult(5))

//gerando numero  e passando como padrão para parametro

function randomNumber(){
    return Math.round(Math.random()*10)
}

const multiplicacao = (a,b = randomNumber()) =>{
    return `${a} X ${b} = ${a*b}`
}

console.log(multiplicacao(4))
console.log(multiplicacao(2))
