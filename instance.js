class Message{
    printMessage(user_name){
        console.log("Hello " + user_name + "!, How are you?");
    }
}

const user1 = new Message();
user1.printMessage("Kisore")
// console.log(user1);

const user2 = new Message();
user2.printMessage("Mahesh");

class Area {
    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;
    }
     // rect
     RectArea(){
        return this.length * this.breadth;
    }
    // square
    SqArea(){
        return this.length * this.length
    }

    // Triangle
    triArea(){
        return 0.5 * (this.length * this.breadth)
    }
} 

const rect = new Area(5,4);
console.log("Area of rectangle is "+rect.RectArea() + " mts");


const square = new Area(2);
console.log("Area of square is "+ square.SqArea() + " mts");

const triangle = new Area(8,3);
console.log("Area of triangle is "+ triangle.triArea() + " mts");
