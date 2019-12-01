(function(window) {
  var hansGreeter = {};

  hansGreeter.name = "Hans";
  var greeting = "Hi ";
  hansGreeter.sayHi = function() {
    console.log(greeting + hansGreeter.name);
  };

  window.hansGreeter = hansGreeter;
})(window);
