//Utilizando promises para fazer funçoes com callback

const doSomeThingPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      //did something
      resolve("First data");
    }, 1000);
  });

const doOtherThingPromise = () =>
  new Promise((resolve, reject) => {
    // throw new Error('Something wrong') Forçando ao erro
    setTimeout(function () {
      //did something
      resolve("Second data");
    }, 1000);
  });

doSomeThingPromise()
  .then((data) => {
    console.log(data.split(""));
    return doOtherThingPromise();
  })
  .then((data2) => console.log(data2.split("")))
  .catch((error) => console.log("Ops", error));

//Executando promisses em paralelo
Promise.all([doSomeThingPromise(), doOtherThingPromise()])
  .then((data) => {
    console.log(data[0].split(""));
    console.log(data[1].split(""));
  })
  .catch((err) => {
    console.log(err);
  });
