// Fuction can access global scope

var one = "one";

// Call function 
registerOutside();

// Console.log can access global environment variable
function registerOutside() {
  console.log(one);
}

// Function scope
firstFunc();

function firstFunc() {
  var a = 2;

  secondFunc();

  function secondFunc() {
    console.log(a);
  }
}

// This function will access global scope directly, it is not nested within a function
var three = "three";

function localAccess() {
  var three = "I am not accessed";

  globalAccess();
}

function globalAccess() {
  console.log(three);
}

localAccess();
