// Object literal and "this"

// Unlike in the previous example, 'this' points to the parent object

// Once you create a new object, variables inside of it refer to the object and not the global scope

/* 
There is a glitch in JS. As seen below, 'this' inside of another function this is inside of a function
starts pointing at a global object.
*/

var literalCircle = {
  radius: 10,

  getArea: function() {
    // This is equal to creating new Object(), hence the behavior of 'this'
    console.log(this);

    var increaseRadius = function() {
      this.radius = 20; // This actually got set on a global object, not local 
    };

    increaseRadius();
    console.log(this.radius);

    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle.getArea());
