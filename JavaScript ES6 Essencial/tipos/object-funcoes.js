const user = {
  name: "Guilherme",
  lastName: "Cabrini da Silva",
};

//Recuperando as chaves do objeto
console.log("Propiedades do objeto user:", Object.keys(user));

//Recuperando os valores das chaves do objeto
console.log("\nValores das propriedades do objeto user:", Object.values(user));

//Retorna um array de arrays contendo [nome_prop,valor_prop]
console.log("\nLista de propiedades e valores:", Object.entries(user));

//Margear propriedades de objetos
Object.assign(user, { fullName: "Guilherme Cabrini da Silva" });

console.log("\nAdiciona a propriedade fullName no objeto user", user);
console.log(
  "\nRetorna um novo objeto margeando dois ou mais objetos",
  Object.assign({}, user, { age: 26 })
);

//Previne todas as alterações em um objeto
const newObj = { foo: "bar" };
Object.freeze(newObj);

newObj.foo = "changes";
delete newObj.foo;
newObj.bar = "foo";

console.log("\nVariavel newObj apos as tentativas de alteraçoes", newObj);

//Permite apenas a alteração de propriedades ja existentes em um objeto
const person = { name: "Guilherme" };
Object.seal(person);

person.name = "Guilherme Cabrini";
delete person.name;
person.age = 26;

console.log("\nVariavel person depois das alteraçoes:", person);
