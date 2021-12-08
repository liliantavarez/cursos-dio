function randomNumber(){
    return Math.round(Math.random()*10)
}

const multiplicacao = (a,b = randomNumber()) =>{
    return `${a} X ${b} = ${a*b}`
}

console.log(multiplicacao(4))
console.log(multiplicacao(2))
