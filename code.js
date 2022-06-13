// Incomplete(finished TDD tests. Time to refactor) - JavaScript I - Testing User Functions - Exercise
// helloWorld function
let helloWorld = function () {
    return "Hello, World!";
}


function sayHello(name) {
    if (typeof name != "string") {
        return `Hello, Jane!`
    } else {
        return `Hello, ${name}!`
    }
}