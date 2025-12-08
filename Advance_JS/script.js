// Call back function -Day2

//1.

function displayMessage(message, callback) {
  console.log(message);

  callback();
}

function afterMessage() {
  console.log("Callback executed !");
}

displayMessage("Hello Everyone!", afterMessage);

//2.

function getData(callback) {
  console.log("Fetching data ...");

  setTimeout(() => {
    callback("Data receive !");
  }, 3000);
}

getData(function (data) {
  console.log(data);
});
