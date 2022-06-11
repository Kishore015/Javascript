class Vehicle {
    constructor(name, price, color){
        this.name = name;
        this.color = color;
        this.price = price;
    }
}

const audi = new Vehicle("Audi", "66L", "blue");

const thar = new Vehicle("Thar", "30L", "blue");

const honda = new Vehicle("Honda", "20L", "white");

// Intialize empty array
let cars = [];

// push elements into array
cars.push(audi);
cars.push(thar);
cars.push(honda);


for(car of cars){
    console.log(`
        Name: ${car.name}, Price: ${car.price}, Price :${car.color}
    `);
}


// Another method
class Bikes{
    arr =  [
                new Vehicle("Hero", "90K", "Red"),
                new Vehicle("Honda", "89K", "Brown"),
                new Vehicle("Yamaha", "100K", "Paleyellow")
        ];

    showBikes() {
        for (const bike of this.arr) {
            console.log(`
                ${bike.name}, ${bike.price}, ${bike.color}
            `)
        }
    }
}

const bike = new Bikes();
bike.showBikes();
