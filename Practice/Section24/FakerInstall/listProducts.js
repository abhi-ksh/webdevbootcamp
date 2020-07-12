console.log("===============================");
console.log("     FAKE PRODUCT LIST         ");
console.log("===============================");
var faker = require("faker");
faker.seed(123);
for(let i = 0; i < 10; i++){
    var product = faker.commerce.productName();
    var price = faker.commerce.price();
    console.log(product + " - $" + price);
}