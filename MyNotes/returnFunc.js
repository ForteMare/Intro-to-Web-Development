// Functions returning functions
function primary() {
  function secondary(m) {
    for (var i = 0; i < m; i++) {
      console.log(i + 1 + ". Hello!");
    }
  }

  return secondary;
}

var test = primary();

test(5);
