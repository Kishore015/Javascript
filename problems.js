// Logic Building problems

// seperate letters and numbers from a input string
const str = "kishore123test456";
let numbers = [];
let letters = [];
for(let i=0;i<str.length;i++){
    if(!isNaN(str[i])){
        numbers.push(str[i])
    }
    else{
        letters.push(str[i])
    }
}
console.log(numbers)
console.log(letters)


// We will use these three ways to print 'Hello, World!'.

console.log("Hello World")
// alert("Hello World")
// document.write("Hello World")

// Add 2 numbers
/*
    To understand this example, you should have the knowledge of the following JavaScript programming topics:
    1. JavaScript Variables and Constants
    2. JavaScript Operators
*/

const num1 = 5;
const num2 = 3;
const sum = num1 + num2;
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

// Find the square root
/*
    To understand this example, you should have the knowledge of the following JavaScript programming topics:
    JavaScript Variables and Constants
    JavaScript Math.sqrt()
*/

function findSqrt(num){
    const sqrt = Math.sqrt(num);
    console.log(`Square root of ${num} is ${sqrt}`)
}

findSqrt(64)

// Calculate Area of Triangle
/* 
    To understand this example, you should have the knowledge of the following JavaScript programming topics:
    JavaScript Operators
    JavaScript Math.sqrt()
    Formula => area = (base * height) / 2
    Formula2 =>  
        s = (a+b+c)/2
        area = √(s(s-a)*(s-b)*(s-c))
*/

function calculateArea(base,height){
    const baseVal = base;
    const heightVal = height;
    const area = baseVal*heightVal/2;
    return `Area of triangle is ${area}`;
}
console.log(calculateArea(3,5))

const areaOfTriangle = (s1,s2,s3) => {
    const side1 = s1;
    const side2 = s2;
    const side3 = s3;
    // calculate the semi-perimeter
    const side = (side1+side2+side3)/2;
    const area = Math.sqrt(side*(side-side1)*(side-side2)*(side-side3))
    console.log(`Traingle area is ${area}`)
}

areaOfTriangle(10,15,20)

// Swap 2 variables

let a = 10, b = 20;
// Using Array destructuring
[a,b] = [b,a];

console.log(`a is ${a}`)
console.log(`b is ${b}`)

let i=5, j=10, temp;
temp = j;
j=i;
i=temp;

console.log(`i is ${i}`)
console.log(`j is ${j}`)

// Using Arithmetic Operators
let p=1, q=2;
p = p+q; //3
q = p-q; //1
p = p-q; //2

console.log(p,q);

// Using XOR
function swapValues(a,b){
    // XOR operator
    a = a ^ b
    b = a ^ b
    a = a ^ b

// kms to miles
// 1 mile = km * 0.621371;
const km =3;
const miles = km * 0.621371;
console.log(`${km} kms is equal to ${miles} miles`)

// miles to kms
// 1 km = miles/0.621371;
const mile = 10;
const kms = mile/0.621371;
console.log(`${mile} miles is equal to ${kms} kms`)

// fahrenheit = celsius * (9/5) + 32
// C = F-32 * (5/9)
const celsius = 42;
const fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit)

// Generate a Random Number
const randomNum  = Math.random();
console.log(randomNum)

// Math.random() * (highestNumber - lowestNumber) + lowestNumber

const genNum = (Math.random()*(999-101)+101)*1000;
const round = Math.floor(genNum)
console.log(`genNum is ${genNum} and rounded Num is ${round}`);

const enteredNum = Math.floor((Math.random()*(999-101)+101)*1000)

if(round === enteredNum){
    console.log("Same OTP, provide access to user")
}else{
    console.log("different otp, throw error")
}

console.log(`${enteredNum}`);
let arr = [];
let set = new Set();
for(let i=0;i<=100;i++){
    const uniqueNum = Math.floor((Math.random()*(999-101)+101)*1000);
    if(set.has(uniqueNum)){
        console.log("duplicate found")
    }else{
        set.add(uniqueNum)
        console.log("Unique OTP Generated")
    }
    arr = [...set]
}
console.log(`${arr}`, typeof arr)
console.log(Array.isArray(arr)); // true

// program that checks if the number is positive, negative or zero
// input from the user
const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");
}

// check if the number is positive, negative or zero
const num = prompt("Enter a number: ");

if (num >= 0) {
    if (num == 0) {
        console.log("The number is zero");
    } else {
        console.log("The number is positive");
    }
} else {
    console.log("The number is negative");
}

// program to check if the number is even or odd
// take input from the user
const numx = prompt("Enter a number: ");

//check if the number is even
if(numx % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}

// ternary operator
const result = (numx % 2  == 0) ? "even" : "odd";

    console.log(`The value of a after swapping: ${a}`);
    console.log(`The value of b after swapping: ${b}`);
}
swapValues(100,200)
