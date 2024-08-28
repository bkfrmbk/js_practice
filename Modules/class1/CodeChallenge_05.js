// Write a program that is based on a number and displays whether the number 
// is odd or even using an if-else statement.
let number = 10;
let isEven
console.log(number % 2)
if (number % 2 == 0) {
    console.log('!!');
}


// Write a program based on age and displays a message based on their age 
// using an if-else if statement:
let age = 24;
// If the age is less than 18, display "You are a minor".
if (age < 18) {
    console.log('You are a minor');
}
// If the age is between 18 and 65 (inclusive), display "You are an adult".
if (age > 18 && age < 65) {
    console.log('You are an adult');
}
// If the age is greater than 65, display "You are a senior citizen".
if (age > 65) {
    console.log('You are a senior citizen');
}

// Write a program based on a letter and displays whether the letter is a vowel 
// or a consonant using an if-else statement.
let letter = 'e';
let vowels = 'aeiou';

if (vowels.includes(letter)) {
    console.log(`${letter} is a vowel`);
} else {
    console.log(`${letter} is not a vowel`);
}


// Write a program based on three numbers and displays the largest number 
// using an if-else statement.
let numberOne = 30;
let numberTwo = 15;
let numberThree = 45;

let largest;

if (numberOne >= numberTwo && numberOne >= numberThree) {
    largest = numberOne;
} else if (numberTwo >= numberOne && numberTwo >= numberThree) {
    largest = numberTwo;
} else {
    largest = numberThree;
}

console.log("The largest number is " + largest);


// Write a program based on given password and displays a message based on 
// the password using an if-else statement:
let password = 'Test1233';

// If the password is less than 8 characters, display "Password too short".

if (password.length < 8) {
    console.log("Password too short")
}

// If the password contains both letters and numbers, display "Password accepted".
if (/[a-zA-Z]/.test(password) && /\d/.test(password)) {
    console.log("Password accepted");
}
// If the password does not meet either of the above conditions, display "Password rejected".
else {
    console.log("Password rejected");
}