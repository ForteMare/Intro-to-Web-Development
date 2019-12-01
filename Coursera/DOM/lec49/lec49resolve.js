// This is a solution to the problem in lec49 where this points to global variable

var literalCircle = {
    radius: 10,
  
    getArea: function() {
      var self = this; // self points to the object 
      console.log(this);
  
      var increaseRadius = function() {
        self.radius = 20; // retrieve object value 
      };
  
      increaseRadius();
      console.log(this.radius);
  
      return Math.PI * Math.pow(this.radius, 2);
    }
  };
  
  console.log(literalCircle.getArea());
  