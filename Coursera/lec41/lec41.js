var message = "in global";

console.log("global: message = " + message);

var a = function() {
  var message = "inside a";

  console.log("a: message = " + message);

  b();
};

function b() {
  console.log("b: message = " + message);
}

a();

// VS
console.log("------------");

var secondMessage = "in global";

console.log("global: message = " + secondMessage);

var ab = function() {
  var secondMessage = "inside a";

  console.log("a: message = " + secondMessage);

  function bb() {
    console.log("b: message = " + secondMessage);
  }

  bb();
};

ab();
