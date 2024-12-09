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

// Largest among 3 numbers
function findLargestNumber(a,b,c){
    if(a>b && a>c){
        console.log(`${a} is largest Number`)
    }else if(b>a && b>c){
        console.log(`${b} is largest Number`)
    }else{
        console.log(`${c} is largest Number`)
    }
}
findLargestNumber(1,2,3)

// Using Math.max()
const nums = [20,200,400];
const largest = Math.max(...nums)
console.log(`Largest number is ${largest}`)

// Prime Number
function checkPrime(num){
    let isPrime = true;
    if(num<=1){
        console.log("Not a prime number")
    }
    else if(num>1){
        for(i=2;i<=num/2;i++){
            if(num%i==0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            console.log("Prime number")
        }else{
            console.log("Not a prime number")
        }
    }
    else{
        console.log("Not a prime number")
    }

}
checkPrime(73)

// Prime Number between intervals
const lowerNumber = 10;
const higherNumber = 300;

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = true;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = false;
            break;
        }
    }
    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == true) {
        console.log(i);
    }else{
        console.log("Number should be greater than 1")
    }
}

// Factorial of a number
const factNum = 15;
if(num<0){
    console.log(`Factorial for negative numbers doesn't exist`)
}
else if(num === 0){
    console.log(`Factorial of 0 is 1`)
}
else{
    let fact = 1;
    for(let i=1;i<=factNum;i++){
        fact = fact*i;
    }
}

// Multiplication of a specific number
const mulNum = 10;
for(let i=1;i<=mulNum;i++){
    console.log(`${mulNum} * ${i} = ${mulNum * i}`)
}

// Fibonnaci Sequence
const febNum = 20;
let n1=0,n2=1, nextTerm;
for(let i=1;i<febNum;i++){
    console.log(num1);
    nextTerm = n1+n2;
    n1 = n2;
    n2 = nextTerm;
}

// program to check an Armstrong number of three digits
function checkArmstrongNum(num){
    let sum = 0;
    // create a temporary variable
    let temp = num;
    while (temp > 0) {
        // finding the one's digit
        let remainder = temp % 10;

        sum += remainder * remainder * remainder;

        // removing last digit from the number
        temp = parseInt(temp / 10); // convert float into integer
    }
    // check the condition
    if (sum == num) {
        console.log(`${num} is an Armstrong number`);
    }
    else {
        console.log(`${num} is not an Armstrong number.`);
    }
}

function ArmStrong(num){
    // program to check an Armstrong number of n digits

// take an input
    const number = new String(num);
    const numberOfDigits = number.length;
    let sum = 0;

    // create a temporary variable
    let temp = number;

    while (temp > 0) {

        let remainder = temp % 10;

        sum += remainder ** numberOfDigits;

        // removing last digit from the number
        temp = parseInt(temp / 10); // convert float into integer
    }

    if (sum == number) {
        console.log(`${number} is an Armstrong number`);
    }
    else {
        console.log(`${number} is not an Armstrong number.`);
    }
}


// program to find Armstrong number between intervals

// take an input
const lowNumber = parseInt(prompt('Enter a positive low integer value: '));
const highNumber = parseInt(prompt('Enter a positive high integer value: '));

console.log ('Armstrong Numbers:');

// looping through lowNumber to highNumber
for (let i = lowNumber; i <= highNumber; i++) {

    // converting number to string 
    let numberOfDigits = i.toString().length;

    let sum = 0;

    // create a temporary variable
    let temp = i;

    /* loop through a number to find if 
    a number is an Armstrong number */
    while (temp > 0) {

        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        // removing last digit from the number
        temp = parseInt(temp / 10); // convert float into integer
    }
 
    if (sum == i) {
        console.log(i);
    }
}


// program to display the sum of natural numbers

function naturalNumbers(num){
    let sum = 0;
// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= num; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);
}

naturalNumbers(100);

/* program to check whether the last digit of three
numbers is same */

// take input
const num_a = prompt('Enter a first integer: ');
const num_b = prompt('Enter a second integer: ');
const num_c = prompt('Enter a third integer: ');

// find the last digit
const result1 = a % 10;
const result2 = b % 10;
const result3 = c % 10;

// compare the last digits
if(result1 == result2 && result1 == result3) {
    console.log(`${num_a}, ${num_b} and ${num_c} have the same last digit.`);
}
else {
    console.log(`${num_a}, ${num_b} and ${num_c} have different last digit.`);
}


// program to find the HCF or GCD of two integers

let hcf;
// take input
const number1 = 100;
const number2 = 150;
// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}

// display the hcf
console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);
