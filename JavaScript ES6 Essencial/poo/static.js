//permite acessar metados e atributos sem precisar instaciar uma determinada classe

"use strict";

class Person {
  static walk() {
    console.log("walking...");
  };
}

console.log(Person.walk());
