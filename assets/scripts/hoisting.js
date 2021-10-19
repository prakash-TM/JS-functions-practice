// Normal
// Can access 'addition' before initialization

addition();

function addition() {
    console.log("Inside Addition Function")
}

addition();

//Arrow
//multiplication();     // ReferenceError: Cannot access 'multiplication' before initialization
const multiplication = () => {
    console.log("Inside Multiplication Function")
}

multiplication();