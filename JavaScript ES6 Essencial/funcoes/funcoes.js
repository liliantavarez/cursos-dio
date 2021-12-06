function fn() {
  return "Code Here";
}

const arrowFn = () => "Code here arrow function";
const arrowFn2 = () => {
  //Mais de uma expressão
  return "Code here";
};

//Funçoes tambem são objetos
fn.prop = "Posso criar propriedades";

console.log(fn());
console.log(fn.prop);

//Receber parâmetros
const logValue = (value) => console.log(value);
const logFnResult = (fnParam) => console.log(fnParam());

logFnResult(fn)

//Receber e retornar funçoes
const controlFnExec = fnParam => allowed =>{
    if(allowed){
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn)

handleFnExecution(true) //Executa a função fn
handleFnExecution() //não executa a função fn

//declaração da função controlFnExec sem arrowFunction

function controlFnExec(fnParam){
    return function(allowed){
        if(allowed){
            fnParam();
        }
    }
}