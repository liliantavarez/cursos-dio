function fn() {
  log("Hoisting da função");
  function log(value) {
    console.log(value);
  }
}

fn();
