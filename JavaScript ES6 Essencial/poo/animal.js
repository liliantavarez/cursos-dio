class Animal {
  constructor() {
    this.qtDePatas = 0;
  }
  movimentar() {}
}

class Cachorro extends Animal {
  constructor(morde) {
    super();
    this.qtDePatas = 4;
    this.morde = morde;
  }

  latir() {
    console.log("Au! au!!");
  }
}

const pug = new Animal(false);
const pitbull = new Animal(true);

console.log(pug)
console.log(pitbull)