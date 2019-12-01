// Undefined variable behavior
var x;
console.log(x);

// Undefined is a reserved word which can be used for such testing
if (x == undefined) {
  console.log("x in first if-statement is undefined");
}

x = 5;
if (x == undefined) {
  console.log("x in second if-statement is undefined");
} else {
  console.log("x has been defined");
}

// This creates an error "not defined" which is not the same as undefined
console.log(m); 