// Default values
function orderChickenWidth(sideDish) {
  /* This is a shorthand for an if-statement that could go here. 
  All variables are coerced into Booleans during run time so method() becomes 'undefined'
  */
 
  sideDish = sideDish || "whatever!";

  console.log("Chicken with " + sideDish);
}

orderChickenWidth("noodles");
orderChickenWidth();
