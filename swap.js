// swapping using third variable
let a=1, b=2;
let temp = b;
console.log(`Before swapping a is ${a} and b is ${b}`)
b=a;
a=temp;
// [a,b] = [b,a]
console.log(`After swapping a is ${a} and b is ${b}`)

// swapping without third variable - Using XOR operator
let x = 10, y=20;
console.log(`Before swapping x is ${x} and y is ${y}`)
x = x^y;
y = x^y;
x = x-y;
console.log(`After swapping x is ${x} and y is ${y}`)


// Swap using array destructuring
let i = 5;
let j = 10;

[i, j] = [j, i];

console.log(i,j); 


