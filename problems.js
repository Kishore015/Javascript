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
