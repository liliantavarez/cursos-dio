//o JS não possui modificadores de acesso ate a versão 12 do node

function Person(initialName){
    let name = initialName //Atributo privado

    //Nescessario implementar metados Get e Set para acessar/modificar 
    this.getName = function (){
        return name
    }

    this.setName = function(newName){
        name = newName
    }
}

const p = new Person('Guilherme')

console.log(p)
console.log(p.getName())
console.log(p.name)

p.setName('Thiago')
console.log(p.getName())

//Como ira funcinar os modificadores de acesso mo JS

class Person {
    #name = '' //usar # para definir uma variavel como privada
    constructor(initialName){
        this.#name = initialName
    }

    setName(name){
        this.#name = name
    }

    getName(){
        return this.#name
    }
}

const newPerson = new Person('João')

console.log(newPerson)
console.log(newPerson.getName())
console.log(newPerson.name)
newPerson.setName('Maricio')
console.log(newPerson.getName())


















