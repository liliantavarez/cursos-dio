const users = ['Guilherme','Pedro','Jennifer']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Jennifer',
        age: 18,
        gender: gender.WOMAN
    }
]

//Retorna a quantidade de itens em um array
console.log('Quantidade de itens:',persons.length)

//Verificar se é um array
console.log('A variavel é um array?', Array.isArray(persons))

//Intererar os intens de um array 
persons.forEach(person =>{
    console.log(`Nome: ${person.name}`)
})

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log('\nNova lista apenas com homens:',mens)

//Retorna um novo 
const personWithCourse = persons.map(person => 
    {
        person.course = 'Introdução a JavaScript'
        return person
    })

    console.log('\nPessoas com a adição do course:',personWithCourse)

    //Transforma um array em outro tipo 
    const totalAge = persons.reduce((age, person) =>{
        age+=person.age
        return age
    },0)

    console.log('\nSoma de idade das pessoas:',totalAge)

    //Juntando operaçoes
    const totalEvenAges = persons
                            .filter(person => person.age % 2 === 0)
                            .reduce((age, person) => {
                                age+=person.age
                                return age
                            }, 0);
    
    console.log('\nSoma de idades das pessoas que possuem idade par:', totalEvenAges)