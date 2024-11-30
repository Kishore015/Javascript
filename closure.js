// simple increment function - Accessing Global Variable within a function to increment th variable
let count = 0;
function increment(){
    count +=1;
    return count;
}
for(i=0;i<10;i++){
    console.log(increment())
}

// Increment with closure - Closure can able to access outer scope(lexical scope) variable 
function closureIncrement(){
     let count = 0;
     return function () {
        count = count+1;
        return count;
     }
}
const result = closureIncrement();
for(i=0;i<10;i++){
    console.log(`count ${i+1} with closure`,result())
}

// Memoization - Can optmize application performance by memorizing function result

function memoizeSquare(){
    const cache = {};
    return function(n){
        if(n in cache){
            return cache[n]
        }
        cache[n] = n*n;
        return cache[n]
    }
}

const square = memoizeSquare();

console.log(square(4))
console.log(square(4))

