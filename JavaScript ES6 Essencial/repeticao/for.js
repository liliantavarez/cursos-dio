const array = ["one", "two", "three"];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(`Element #${index}: ${element}.`);
}

let arr = [3,5,7]
arr.foo= 'Hello'

for (let i in arr) {
    console.log(i) //logs "0","1","2","foo"
}

for (const i of arr) {
    console.log(i) //logs "3","5","7"
}