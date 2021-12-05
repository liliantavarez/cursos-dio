// Currying: Técnica de transformar uma função com N paramentos em uma função com um único parâmetro, retornando uma nova função para cada parâmetro.

// Exemplos:

//(Função padrão)

function soma(a,b){
	return a+b;
}
soma(2,2)
soma(2,3)
soma(2,4)
soma(2,5)

// (usando o currying na função soma)

function soma(a){
	return function(b){
		return a+b
	}
}

const soma2 = soma(2)

soma2(2)
soma2(3)
soma2(4)
soma2(5)




















