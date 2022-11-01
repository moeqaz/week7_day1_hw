console.log('Hello world from the main.js file!');


// Basics of JavaScript

/*
    Multiline comments
        in JavaScript.

        -- Variable Declaration in JavaScript --
        Primitive Data Types: String, Number, Boolean, Undefined, Null
        Objects: Object, Array, Function
*/

// Variable Declaration 
// var myName;

// console.log(myName)

// String Declaration
var myName = 'Usama';

// console.log() is equivalent to python's print() function
console.log(myName);
console.log(typeof myName);

// Strings can be created using '', "", or ``, The tick marks (``) have a special behavior to format the string
// Tick marks + $(varName) is equivalent to f"{}" in python
console.log("My name is ${myName}");
console.log('My name is ${myName}');
console.log(`My name is ${myName}`);

// Integer
var myAge = 23;

console.log(myAge);
console.log(typeof myAge);

// Float
var pi = 3.14;

console.log(pi);
console.log(typeof pi);


// Boolean
var boolTrue = true;
console.log(boolTrue);
console.log(typeof boolTrue);

var boolFalse = false;
console.log(boolFalse);
console.log(typeof boolFalse);


// Undefined
var something;

console.log(something);
console.log(typeof something);

// Null
var someNull = null;

console.log(someNull);
console.log(typeof someNull); // A bug in the code!


// Object DataTypes

// Object
var myObject = {
    a: 123,
    test: 'Hello World'
};

console.log(myObject);
console.log(typeof myObject);

// Array
var myArr = ['Usama', 'Baltimore', 'Coding Temple', 23];

console.log(myArr);
console.log(typeof myArr);


// Function 
function abc(){};

console.log(abc);
console.log(typeof abc);


// Accessing the Properties from an object
var person = {
    first: 'Usama',
    last: 'Qazi',
    languages: ['Python', 'JavaScript']
};

console.log(person);

// Bracket Notation
console.log(`My first name is ${person['first']}`);
// Dot Notation
console.log(`My last name is ${person.last}`);

console.log(person.languages);

// When accessing properties in an array (aka the index), use bracket notation
console.log(`My favorite language is ${person.languages[0]}`);

// Arrays have a "length" property
var myNewArr = ['abc', '123', 'hello world'];

console.log(myNewArr, myNewArr.length);

console.clear();


// var vs let vs const

// let - Allows us to declare a variable similar as var *let is block-scoped, var is global-scoped*
let myCity = 'Baltimore';
let test;
console.log(myCity);

if (true) {
    var myState = 'Maryland';
    let myCity = 'Towson';
    let color = 'Blue';
    console.log(myCity, myState, color);
}

console.log(myCity, myState);


// const - similar to let (block-scoped) - 2 differences: 2. Needs a value when declared  2. Cannot be reassigned

const newVariable = 'something';
console.log(newVariable);

// newVariable = 'something else';  // Uncaught TypeError: Assignment: Assignment to constant variable


const myBirthday = true;
let ageOfPerson = 23;

if (myBirthday){
    const myFavColor = 'Black';
    ageOfPerson += 1;
    console.log(ageOfPerson);
    // myBirthday = false;  // Error because myBirthday was const -> cannot be reassigned
    console.log(myFavColor);
}


// console.log(myFavColor);  // Error: myFavColor not defined

const cities = ['Baltimore', 'College Park', 'Towson', 'Philadelphia'];

console.log(cities);

cities[1] = 'San Francisco';

console.log(cities);

// cities = ['Austin', 'Dallas']; // Error: Assignment to const
// console.log(cities);

const newPerson = {
    first: 'Abe',
    last: 'Lincoln'
};

console.log(newPerson);

newPerson.first = 'Abraham';

console.log(newPerson);

// newPerson = {
//     first: 'Mary Todd',
//     last: 'Lincoln'
// }; Error: Assignment to const
// console.log(newPerson);

// clear the console for new topic
console.clear();


// Basic Math Operations

// Addition
let sum = 5 + 5;
console.log(sum);
sum += 5; // sum = sum + 5
console.log(sum);
sum++; // sum += 1 OR sum = sum + 1
console.log(sum);

// Subtraction
let diff = 10 - 5;
console.log(diff);
diff -= 3; //diff = diff - 3
console.log(diff);
diff --; // diff -= 1 // diff = diff - 1
console.log(diff);

// Multiplication
let prod = 4 * 5;
console.log(prod);
prod *= 5; // prod = prod * 5
console.log(prod);

// Division
let quotient = 40 / 5;
console.log(quotient);
quotient /= 2; // quotient = quotient / 2
console.log(quotient);

// Floor Division
let floor = Math.floor(10/3);
console.log(floor);

// Exponents
let square = 5 ** 2;
console.log(square);
square **= 2; // square = square ** 2
console.log(square);

// Modulo
let remainder = 19 % 4;
console.log(remainder);
remainder %= 2; // remainder = remainder % 2
console.log(remainder);


let myString = 'My age is ';
let myCoolAge = 45;

let addedString = myString + myCoolAge;
console.log(addedString);
console.log(typeof addedString);

console.log(square)
let quizOne = square + '4';
console.log(quizOne);

let abcd = square + Number('4');
console.log(abcd);

quizTwo = square - '4';
console.log(quizTwo);

console.clear();

// JavaScript Comparisons
console.log(5 == 5);
console.log(5 == 5.0);
console.log(5 == '5');
console.log(5 === '5');
// == check for equality while allowing for type conversion
// === check for equality but does not allow for type conversion

console.log(0 == false);

console.log('10' < 5);

// Be careful with type conversions 
console.log('100' > '9'); // Both values are already strings, no conversion needed, compares alphabetically
console.log('Z' > 'A');

// When JavaScript compares objects, it looks for REFERENCE ONLY!!!
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

console.log(arr1 == arr2);
console.log(arr1 === arr2);

let animals = ['dog', 'monkey', 'giraffe'];
let newAnimals = animals;

console.log(animals);
console.log(newAnimals);

console.log(animals == newAnimals);
console.log(animals == ['dog', 'monkey', 'giraffe']);
console.log(animals === ['dog', 'monkey', 'giraffe']);

animals.push('horse');
console.log(animals);
console.log(newAnimals);


// Greater Than (>), Greater Than or Equal (>=), Less Than (<), Less Than or Equal (<=)
// Equal allow type conversion (==), Equal no type conversion (===), 
// Not Equal yes conversion (!=), Not Eqaul no conversion (!==)

console.log(5 != '5');
console.log(5 !== '5');

console.clear();


// Control Flow

// if (condition expression){code to execute if true}

let newNumber = 21;
console.log('Begin');
if (newNumber > 65){
    console.log('Senior');
} else if (newNumber > 18){
    console.log('Adult');
} else {
    console.log('Child');
};
console.log('End');

// Ternary Operator - (condition) ? value if true : value if false
// PYTHON - value = value_if_true if condition else value_if_false

let ageGroup = (newNumber > 65) ? 'Senior' : 'Adult';
console.log(ageGroup);

let ageGroup2 = (newNumber > 65) ? 'Senior' : (newNumber > 18) ? 'Adult' : 'Child'

console.log(ageGroup2);


// && - and
// || - or

newNumber = 12;
if (newNumber > 18 && newNumber < 40){
    console.log('Young Adult');
};

if (newNumber < 18 || newNumber > 65){
    console.log('You get a discount');
};

console.clear();


// JavaScript Loops
// for, for...in, for...of, while, do while

// Standard for loop
// for (counter; expression/condition; increment/decrement for the counter){code to execute each loop}

console.log('Loop has started')

for (let i = 0; i <= 20; i++){
    console.log(i)
};

console.log('Loop has ended')

// let colors = ['red', 'pink', 'blue', 'green', 'yellow'];

// for (let i = 0; i < colors.length, i++){
//     console.log(i, colors[i])
// }


// for...in -- used to loop over properties of an object
let teams = {
    mlb: 'White Sox',
    nba: 'Bulls',
    nfl: 'Bears',
    nhl: 'Blackhawks'
};

// for (let variable in obj){code to execute each property in object}
for (let t in teams){
    console.log(t);
    console.log(teams[t])
}

// for...of  -- used to loop over the elements in an Array
let planets = ['Mercury', 'Mars', 'Earth', 'Venus', 'Jupiter']

for (let p of planets){
    console.log(p);
};

for (let p in planets){
    console.log(p);
    console.log(planets[p])
};


// While loop - loop while a condition is true
// while (condition){code to execute while condition is true}

let num1 = 10;

while (num1 < 100){
    console.log(num1);
    num1+=10;
}


// Do while loop - DO the first portion AT LEAST ONCE
// If the while condition is still True, continue the while loop

// do {code to execute} while (condition);

let x = 100;

console.log('Do While')
do {
    x *= 2;
    console.log(x)
} while (x < 10);

console.log('While');
x = 100;
while(x < 100){
    x *= 2
    console.log(x)
}

// do {
//     var firstName = prompt('What is your name? ')
// } while (firstName);


// try{
//     code to try that might have an issue
// } catch(err){
//     code if there is an issue, `err` is the error message
// }