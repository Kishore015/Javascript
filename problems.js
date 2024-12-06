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

    console.log(`The value of a after swapping: ${a}`);
    console.log(`The value of b after swapping: ${b}`);
}
swapValues(100,200)
