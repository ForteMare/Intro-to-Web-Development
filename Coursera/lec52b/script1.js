(function(window) {
  var lukaGreeter = {};

  lukaGreeter.name = "Luka";
  var greeting = "Hello ";
  lukaGreeter.sayHello = function() {
    console.log(greeting + lukaGreeter.name);
  };

  window.lukaGreeter = lukaGreeter;
})(window);
