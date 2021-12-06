'use strict'

class Pessoa {
    constructor(nome){
        this.nome = nome
    } 
}

class PessoaF extends Person{
    constructor(nome,cpf){
        super(nome)
        this.cpf = cpf
    }
}