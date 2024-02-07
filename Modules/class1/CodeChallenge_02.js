// Arithmetic Operators:

// Write a program that declares two variables num1 and num2, assigns them number values, 
var num1 = 1;
var num2 = 2;
// and then calculates and prints the product of num1 and num2.
console.log(num1 * num2);
// Write a program that declares a variable radius and assigns it a number value 
// representing the radius of a circle. 
var radius = 5;
// Then, use the exponentiation operator to calculate the area of the circle 
// (pi times radius squared). Print the resulting area to the console.
function calculateArea(radius) {
    return radius ** 2 * Math.PI
}
console.log(calculateArea(radius));

// Assignment Operators:

// Write a program that declares a variable count and assigns it an initial value of 5.
var count = 5; 
// Then, use the addition assignment operator to add 2 to count. 
count += 2;
// Print the resulting value of count to the console.
console.log(count);

// Write a program that declares a variable price and assigns it an initial value of 10.
var price = 10; 
// Then, use the multiplication assignment operator to multiply price by 2.5. 
price *= 2.5;
// Print the resulting value of price to the console.
console.log(price);

// Comparison Operators:

// Write a program that declares two variables age1 and age2, 
// assigns them number values representing the ages of two different people, 
var age1 = 12;
var age2 = 19;
// and then uses the greater than operator to determine if age1 is greater than age2. 
// Print the resulting boolean value to the console.
console.log(age1 > age2);
// Write a program that declares a variable name and assigns it a string value 
// representing a person's name. 
// Then, use the not equal to operator to determine if name is not equal 
// to the string "John Doe". Print the resulting boolean value to the console.
function isJohnDoe() {
    const name = 'bob'
    console.log(name == 'John Doe');
}
isJohnDoe();


// Logical Operators:

// Write a program that declares two variables isMember and hasCoupon, 
// assigns them boolean values indicating whether or not a customer is a member 
// and whether or not they have a coupon code, and then 
var isMember = true;
var hasCoupon = true;
// uses the logical OR operator to determine if the customer is 
// eligible for free shipping. Print the resulting boolean value to the console.
console.log(isMember || hasCoupon);
// Write a program that declares a variable num and assigns it a number value. 
var num = 1;
// Then, use the logical NOT operator to determine if num is not equal to 0. 
// Print the resulting boolean value to the console.
console.log(num != 0);


// Conditional (Ternary) Operator:

// Write a program that declares a variable age and assigns it a number value 
// representing a person's age. 
var age = 32;
// Then, use the conditional operator to determine if the person is old enough to vote. 
// If the person is old enough, print the string "You are old enough to vote" 
// to the console. 
// Otherwise, print the string "You are not old enough to vote" to the console.
let canVote = age >= 18 ? 'You are old enough to vote' : 'You are not old enough to vote';
console.log(canVote);
// Write a program that declares a variable price and assigns it a number value 
// representing the price of a product. 
var price = 3;
// Then, use the conditional operator to determine if the product is on sale. 
// If the product is on sale, print the string "The product is on sale" to the console. 
// Otherwise, print the string "The product is not on sale" to the console.
function isOnSale(price) {
    price <= 3 ? console.log('The product is on sale') : console.log('The product is not on sale');
}
isOnSale(price);