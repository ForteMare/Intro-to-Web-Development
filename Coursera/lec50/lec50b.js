// // Creating arrays
// var array = new Array();
// array[0] = "Luka";
// array[1] = 2;
// array[2] = function(name) {
//   console.log("Hello " + name);
// };
// array[3] = { course: " HTML, CSS, JS" };

// console.log(array);

// // Cool things you can do with an array
// console.log(array[1]);
// array[2](array[0]);
// console.log(array[3].course);

// // Short hand array creation
// var names = ["Luka", "John", "Joe", { name: "Lux Deluxe" }];
// console.log(names);

// // Just an overview of a for-loop
// for (let a = 0; a < names.length; a++) {
//   console.log(names[a]);
// }

// // Arrays in JS can be sparse!
// names[40] = "Slippin Jimmy!"

// for (let a = 0; a < names.length; a++) {
//     console.log(a + ". " + names[a]);
//   }

var names2 = ["Luka", "George", "Timmy"];

var myObj = {
  name: "Lux",
  course: "HTML, CSS, JS",
  platform: "Coursera"
};

for (var prop in myObj) {
  console.log(prop + ": " + myObj[prop]);
}

// Arrays are just objects in JS
names2.greeting = "Hi!";

for (var name in names2) {
  console.log("Hello " + names2[name]);
}
