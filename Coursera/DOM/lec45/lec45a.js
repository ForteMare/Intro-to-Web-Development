// Object creation
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company);
console.log("company CEO name is: " + company.ceo.firstName);

// Alternative way of printing out information
console.log(company["name"]);

// Why alternative way matters 
company["stock of company"] = 110; 
console.log("Stock price is: " + company["stock of company"]); 

// Even beter method of using alternative approach
var comp = "Status of the company";
company[comp] = "crap"; 

console.log("Company status is: " + company[comp])

