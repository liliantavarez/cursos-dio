const nameSymbol1 = Symbol('name')
const nameSymbol2 = Symbol('name')

const user = {
    [nameSymbol1]: 'Guilherme',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Cabrini da Silva'
}

console.log(user)

//Symbols criam propriedades que não são enumberables
for (const key in user) {
    if (user.hasOwnProperty(key)){
        console.log(`\nValor da chave ${key}: ${user[key]}`)
    }
}