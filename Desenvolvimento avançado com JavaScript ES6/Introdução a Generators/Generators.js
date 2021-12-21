/*Generators: São funçoes com pausas e que podem ser controladas 
    permite construir iteradores de uma maneira mais simples
*/
function* hello() {
  console.log("Hello");
  yield 1;
  console.log("From");
  const value = yield 2;
  console.log(value);
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next("Outside!"));

function* naturalNumbers() {
  let number = 0;
  while (true) {
    yield number;
    number++;
  }
}

const nt = naturalNumbers();
console.log(nt.next());
console.log(nt.next());
console.log(nt.next());
console.log(nt.next());
console.log(nt.next());

//Gerando uma interface de interação no obejto

const obj = {
  values: [1, 2, 3, 4],
  *[Symbol.iterator]() {
    for (var i = 0; i < this.values.length; i++){
        yield this.values[i];
    } 
  },
};

for (const value of obj) {
  console.log(value);
}
