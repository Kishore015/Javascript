
function getData(callback) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    xhr.send();

    xhr.addEventListener('readystatechange',() => {
        if(xhr.readyState === 4 && xhr.status === 200){
            // console.log(xhr.responseText);
            const data = JSON.parse(xhr.responseText)
            callback(undefined, data);
        } else if(xhr.readyState === 4){
            // console.log('Error while fetching data')
            callback('could not fetch data', undefined)
        }
    })
}


const db = new XMLHttpRequest();

db.open('GET', './db.json');
db.send();

db.addEventListener('readystatechange',() => {
    if(db.readyState === 4 && db.status === 200){
        // console.log(xhr.responseText);
        const data = JSON.parse(db.responseText)
        console.log(data)
    } else if(db.readyState === 4){
        console.log('Error while fetching data')
    
    }
})



console.log(1)
console.log(2)

getData((err, data) => {
    console.log('callback fired');
    if(err){
        console.log(err)
    } else {
        console.log(data)
    }
})

console.log(3)
console.log(4)
