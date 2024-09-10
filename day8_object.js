
// 1> create and access object properties

let car = {

    make: "toyota",
    model: "corolla",
    year: 2020
}

console.log(car.make);
console.log(car.model);
console.log(car.year);


// 2>add and update properties

car.color = "red";
car.year = 2023;

console.log(car.color);
console.log(car.year);


// 3> delete propoty

delete car.model;

console.log(car.model);


// 4>nested object


let student = {

    name: "john",
    age: 14,
    grades: {
        math: 67,
        history: "85"
    }
};

console.log(student.grades.math);


// 5>object mathod

let person = {

    firstname: "kushal",
    lastname: "chatterjee",
    getfullname: function () {

        return this.firstname + " " + this.lastname
    }
}

console.log(person.getfullname());


// 6> iterating over object propaty

for (const key in student) {

    console.log(key + " " + student[key]);

}


// 7> copying objects

let carcopy = Object.assign({}, car)

console.log(carcopy);


//8> object destructuring

let { firstname, lastname } = person

console.log(firstname);
console.log(lastname);

//9> merging object

let gfg_courses = {
    CIP: 7000,
    DSA: 2500,
    Data_Science: 4500,
    Web_Dev: 8900
};

let gfg_live = {
    Frontend: 9000,
    Backend: 9500,
    FullStack: 11000,
    Web_Dev: 9000
};

 // Using Object.assign()
 let gfg = Object.assign(gfg_courses, gfg_live)

 console.log(gfg);



