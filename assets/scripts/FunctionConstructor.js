// 1. Normal Function Constructor


function PersonN() {
    this.nameN = 'Ben';
}
const person1 = new PersonN();

console.log(person1.nameN); // Ben


// 2.  Arrow Function Constructor

let PersonA = () => {
    this.nameA = "Ten"
}


console.log(PersonA.nameA) // undefined