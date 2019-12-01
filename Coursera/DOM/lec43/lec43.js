var string = "Hello";
string += " World";
console.log(string + "!");

// Regular math operations
console.log((5 + 4) / 3);
console.log(undefined / 5); // This produces a NaN result, short for Not a Number

// Equality
var x = 4,
  y = 4;
if (x == y) {
  console.log("x is equal to 4");
}

// An example of *TYPE COERSION* meaning JS converts one type to another
x = "4";
if (x == y) {
  console.log("x is equal to y? Yes!");
}

// Strict equality
if (x === y) {
  console.log("Strict: x='4' is equal to y=4");
} else {
  console.log("Strict: x='4' is NOT equal to y=4");
}

// If statements that are considered false
if (false || null || undefined || "" || 0 || NaN) {
  console.log("this line won't ever exectute!");
} else {
  console.log("All are false!");
}

// If statements that are considered true
if (true && "hello" && 1 && -1 && "false") {
  console.log("All are true");
}

// Best practice for {} style

function a() {
  return; // This part can return 'undefined' becuase JS engine does not register {} on the next line and automatically puts ; at the end of return
  {
    name: "Yaakov";
  }
}

function b() {
  return {
    name: "Yaakov"
  };
}

console.log(a());
console.log(b());

// For loop
var sum = 0;

for (var i = 0; i < 10; i++) {
  sum = sum + 1;
}

console.log("sum 0 through 9 is: " + sum);
