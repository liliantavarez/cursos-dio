const symbol1 = Symbol('nome')
const symbol2 = Symbol('nome')

//Symbols são unicos
console.log('symbol1 é igual a symbol2?', symbol1===symbol2)

//Previnir conflito entre nomes de propriedades 
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

console.log('Propriedades do objeto user:', Object.keys(user))
console.log('Valores das propriedades do objeto user:', Object.values(user))

//Exibir symbols de um objeto 
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user))

//Acessando todas as propriedades do objeto 
console.log('Todas as propriedades do objeto user:', Reflect.ownKeys(user))