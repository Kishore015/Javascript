class Department {
    constructor(Dept_Name, Location, Details){
        this.Dept_Name = Dept_Name;
        this.Location = Location;
        this.Details = Details;
    }
}

let d1 = new Department("Web-Dev", "HYD", {name: "Kishore", role: "Frontend"});
let d2 = new Department("Web-Dev", "Bangalore", {name:"Prash", role:"Backend"})

console.log(d1)
console.log(d2)

// Another method

class Friends{
    name;
    age;
}

const f1 = new Friends();
f1.name = "Rajesh"; f1.age = 28;

const f2 = new Friends();
f2.name = "Harish"; f2.age = 27;

console.log(f1, f2);
