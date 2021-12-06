//Funçoes no JS que retornam um objeto sem a nescessidade de chamalas com um new

function Pessoa(name) {
  return {
    name,
    lastName: "Silva",
  };
}

const p = Pessoa("Jorge");
console.log(p);

function Pessoa2(customProps) {
  return {
    name: "Maria",
    lastName: "Silva",
    ...customProps,
  };
}

const p2 = Pessoa2({ name: "Marcia", age: 22 });
console.log(p2);
