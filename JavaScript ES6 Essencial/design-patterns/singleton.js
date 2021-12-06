//cria uma unica instancia de uma função construtora e retorna ela sempre que for nescessario

function Pessoa() {
  if (!Pessoa.instance) {
    Pessoa.instance = this;
  }
  return Pessoa.instance;
}

const p = Pessoa.call({ name: "Jorge" });

const p2 = Pessoa.call({ name: "Maria" });

console.log(p);
console.log(p2);

//p2 é uma instancia de p, logo não é sobescrito
