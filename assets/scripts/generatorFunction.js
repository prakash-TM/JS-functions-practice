function* numberSub() {
    var num = 10;
    while (true) {
        yield num--;
    }
}
var gen = numberSub();

console.log(gen.next().value); // type 1 for getting output
console.log(gen.next().value);
console.log(gen.next().value);

let res = gen.next();
console.log(res.value); // type 2 for getting output
res = gen.next();
console.log(res.value);
res = gen.next();
console.log(res.value);































// function* generatorFunction() {
//     console.log("Start")
//     yield 7;
//     console.log("Midway")
//     yield 8;
//     console.log("Stop")
// }

// const gen = generatorFunction();

// let result = gen.next();
// console.log(result.value) // logs 7
// result = gen.next();
// console.log(result.value) // logs 8
// result = gen.next();