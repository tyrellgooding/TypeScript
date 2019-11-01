//------------------------------------//
/*Types
//------------------------------------//

//// Type string
let myName = "Ben";

//// Type number
let myAge = 23;

//// Type Boolean
let hasJob = true;

//// Assign types
let myRealAge: number;
myRealAge = 23;
//myRealAge = '46';

//// Type array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];

//// Type tuples
let address: [string, number] = ["My Road", 85];

//// Type enum
enum Color {
  Grey = 1, //
  Blue = 2, //
  Purple = 3 //
}
//Numbers will continue to increment after the latest number. eg 01 - 02 / 100 - 101 - 102.
let myColor: Color = Color.Purple;

//// Type any
let car: any = "Audi";
console.log(car);
car = { brand: "Audi", rs: 3 };
console.log(car);

//// Type functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

//// Type void = nothing
function sayHello(): void {
  console.log("Hello");
}

//// Type argument
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
//console.log(multiply(2, "Ben"));
console.log(multiply(10, 3));

// A function is a type on its own.

//Type fucntion - order is important
let myMultiply: (val1: number, val2: number) => number; // < is a function type
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

//Type object - order is not clear and can be changed behind the scene - property names are important to identify the properties we are reffering too.

//Key is propety name and value is the value is the value of the property serperated by :
let userData: { name: string; age: number } = {
  name: "Tyrell",
  age: 23
};
// userData = {
//   a: "Hello",
//   b: 22
// };

//Complex object - Must include a data property and output property
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.date;
  }
};

// Complex = {};

//// Type alias

type Complex = { data: number[]; output: (all: boolean) => number[] }; // This is a type creation.

let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.date;
  }
};

//// Type union
let myRealBirthYear: number | string = 1996;
myRealBirthYear = "1996";
// myRealBirthYear = true;

//// Check Types == is to check the type.
let finalValue = 88;
if (typeof finalValue == "number") {
  console.log("Final value is a number");
}

//// Type never - means it is never finishes the function. never returns anything.
function neverReturns(): never {
  throw new Error("An Error!");
}

//// Type Nullable
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny: number | null = null;
canThisBeAny = 12;
//------------------------------------//
*/
//------------------------------------//
//------------------------------------//
/* Challenge 1
//------------------------------------//

type BankAccount = { money: number; deposit: (val: number) => void };

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: { name: string; bankAccount: BankAccount; hobbies: string[] } = {
  name: "Tyrell",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);
//------------------------------------//
*/
//------------------------------------//
//------------------------------------//
// Understanding the compiler.
//------------------------------------//
/*
let myName: string = "Tyrell";
let myAge: number = 23;

function controlMe(isTrue: boolean, someThingElse: boolean) {
  let result: number;
  if (isTrue) {
    result = 12;
  }
  result = 33;
  return result;
}

// let & const
// let is a blocked scoped variable - contained in the block in which it is defined.
// const value cannot be reassigned as it is constsant. use when a value is not going to be changed.
let variable = "Test1";
variable = "A new value";
const variable_1 = "Test2";

// Block scope
function reset() {
  let variable = null;
  console.log(variable);
}

reset();
console.log(variable);

// Arrow functions
console.log("Arrow Funcitons");

// Standard funciton
const addNumber = function(number1: number, number2: number): number {
  return (number1 = number2);
};
console.log(addNumber(10, 3));

//Arrow Example
const multiplyNumbers = (number1: number, number2: number) => {
  return number1 * number2;
};
console.log(multiplyNumbers(20, 5));

const greet = () => {
  console.log("Hello");
};
greet();

const greetFriend = friend => console.log(friend);
greetFriend("Tizyo");

// Default Parameters
console.log("DEFAULT PARAMETERS");

const countDown = (start: number = 10): void => {
  while (start > 0) {
    start--;
  }
  console.log("Done!", start);
};
countDown();

// Rest & Spread operator
console.log("REST & SPREAD OPERATORS");
// spread = ... spreads an array in to single values. if used in a function call the spread is used.
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(...numbers);

// rest = ...  allows us to represent an indefinite number of arguments as an array.
function makeArray(...args: number[]) {
  return args;
}
console.log(makeArray(1, 56, 39));

//Destructuring Arrays
console.log("Destructuring Arrays");

const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

//Destructuring Objects
console.log("Destructuring Objects");

const userData = { userName: "Tyrell", age: 23 };
const { userName: myName1, age: myAge2 } = userData;
console.log(myName1, myAge2);

// Template literals `  `

console.log("TEMPLATE LITERALS");

const myName3 = "Gooding";
const greeting = `Hello my surname is, ${myName3}
and I play football for Barcelona!`;
console.log(greeting);
*/
// Challenge 2
// Exercise 1
var double = function (value) { return value * 2; };
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
var greet = function (name) {
    if (name === void 0) { name = "Bob"; }
    console.log("Hello" + name);
};
greet();
greet("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log([result1, result2, result3]);
// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
