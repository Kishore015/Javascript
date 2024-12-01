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

// Throttling and Debouncing

// Throttling - It is a technique used in JS to control how often a function or action is excuted overtime.
// It ensures that a function runs at most once in a specific period of time regardless of how many times the event that triggrs the function occurs.
// This is useful for optimizing performance and reducing resource usage for events like scroll, resize, keypress.
// Throttling is often implemented using setTimeout.

const debounce = (func, delay) => {
    let debouncing;
    return function(...args){
        clearTimeout(debouncing);
       debouncing = setTimeout(() => func(...args), delay)
    }
}
const callApi = (inputValue) => {
    console.log("Call Search API with input:", inputValue);
    const result = document.getElementById('result');
    result.textContent = "You searched for " + inputValue; // Update the <p> tag with the input value
}
const debounceAPI = debounce(callApi, 500)
const input = document.getElementById('input');
input.addEventListener('input', function(e){
    debounceAPI(e.target.value);
})

// Throttling - 

function throttle(func, limit) {
    let lastExecutionTime = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastExecutionTime >= limit) {
        func.apply(this, args);
        console.log(`Resized After ${limit/1000} seconds`)
        lastExecutionTime = now;
      }
    };
  }

// Function to be throttled
function onResize() {
    console.log("Resized at", new Date().toLocaleTimeString());
  }
  
  // Throttled version of the function
  const throttledResize = throttle(onResize, 2000);
  
  // Event listener
  window.addEventListener("resize", throttledResize);
  
  
