// Create an array of student names (Add at least 5 names)
let students = ['bob', 'joe', 'sally', 'sue', 'bartholomew']
// Find the length of an array
console.log(students.length);
// Demonstrate the usage of array manipulation on students array 
// by showing example of pop, push, shift, unshift, splice functions
// Pop
students.pop()
console.log('Popped array: ' + students);
console.log('-------------');
// Push
students.push('Kate');
console.log(students);
console.log('-------------');
// Shift
let removedElement = students.shift();
console.log(removedElement + ' was removed from the students array. ');
console.log(students + ' remain');
console.log('-------------');
// Unshift
students.unshift('bilbo');
console.log("Unshift students: " + students);
console.log('-------------');
//Splice
students.splice(1, 0);
console.log('spliced' + students);
console.log('-------------');
// Find out if array includes the value ‘John’
students.includes('John') ? console.log('John is a student') : console.log('John is not a student')
console.log('-------------');
// Find index of student ‘Kate’
console.log(students.indexOf('Kate'));
console.log('-------------');
// Reverse your array and print last Index value
let reversed = students.reverse();
console.log(reversed);
console.log('-------------');
// Find out if the first index value equals to 
// last index value (Hint: use comparison operator. NOT LOOP )
let answer = students[0] == students[students.length - 1]
console.log(answer);