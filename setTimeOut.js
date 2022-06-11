const iterateArray = () =>{
    const arr = [1,2,3,4,5,6,7,8,9,10];
    setTimeout(()=>{
        for (const i of arr) {
            console.log(`Array value is ${i} and value is at index ${i-1}`);
            console.log("Hi, I am Kishore")
        }
    }, 2000)
   
}

iterateArray();


console.log("Hi, I am Kumar")
console.log("Hi, I am Kishan")
console.log("Hi, I am Kiran")
console.log("Hi, I am Kilogram");



