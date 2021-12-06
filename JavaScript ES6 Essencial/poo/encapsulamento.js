//Serve para ocultar detalhes do funcionamento interno

class Person {
  #name = "Car";
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const novaPessoa = new Person;
console.log(novaPessoa.name)