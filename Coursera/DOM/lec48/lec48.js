/* This example from Coursera is supposed to show that this.myname belongs to global environment. 
New JS has come out since the video and changes were introduced. 

When running on Chrome dev tools, this.myname is only printed if test() is activated
*/

function test() {
  console.log(this);
  this.myname = "Luka";
}

// test();
// console.log(window.myname);

/* Example below shows how data type becomes object-specific when object is invoked with "new"
Keeping in mind that in JS functions can be objects and can be constructed as such

If the function is initiated with constructor "new", it cannot have a return value! 
*/

// Function constructors
function Circle(radius) {
  console.log(this);
  this.radius = radius;
}

// Alternative to writing a standard getter (like in Java)
Circle.prototype.getArea = function () {
  return Math.PI * Math.pow(this.radius, 2); 
}

var myCircle = new Circle(10); // Like creating new object because of the 'new'
console.log(myCircle.getArea());
