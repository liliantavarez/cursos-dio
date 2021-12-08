//maneira classica de escrever objetos literias

var obj ={
    prop: 'Digital Innovation One'
}
console.log(obj.prop)

//referenciado valor da propriedade a uma variavel
var prop = 'DIO'
function method1(){
    console.log('method called')
}

//criando função no objeto
var obj2 = {
    prop,
    method1,
    sum(a,b){
        return a+b
    }
}

console.log(obj2.prop)
obj2.method1()
console.log(obj2.sum(4,3))
