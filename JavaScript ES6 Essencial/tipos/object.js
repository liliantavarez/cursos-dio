let user = {
  name: "Guilerme",
};

//Alterando a propriedade de um objeto
console.log(user)

user.name = "Outro nome 1"; //acessando de maneira direta
console.log(user)
user["name"] = "Outro nome 2"; //acessando Tipo um array

const prop = "name"; //através de uma variavel com o nome da propriedade
user[prop] = "Outro nome 3";


//Criando uma nova propriedade em um objeto ja existente
user.lastName = "Cabrini da Silva";

//Deletando  uma propriedade
delete user.name;
