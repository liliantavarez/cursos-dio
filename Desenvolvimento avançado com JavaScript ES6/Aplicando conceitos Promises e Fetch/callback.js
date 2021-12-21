function doSomeThing(callback) {
  setTimeout(function () {
    callback("First data");
  }, 1000);
}

function doOtherThing(callback) {
  setTimeout(function () {
    callback("Second data");
  }, 1000);
}

function doAll() {
  try {
    doSomeThing(function (data) {
      var processedData = data.split("");
      try {
        doOtherThing(function (data2) {
          var processedData2 = data2.split("");
          try {
            setTimeout(function () {
              console.log(processedData, processedData2);
            }, 1000);
          } catch (err) {
            //handle error
          }
        });
      } catch (err) {
        //handle error
      }
    });
  } catch (err) {
    //handle error
  }
}

doAll();
