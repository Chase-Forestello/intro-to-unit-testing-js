// Incomplete(finished TDD tests. Time to refactor) - JavaScript I - Testing User Functions - Exercise

// helloWorld function

let helloWorld = function () {
    return "Hello, World!";
}

// sayHello function

let sayHello = function (name) {
    if (typeof name === "undefined" || "boolean" && typeof name != "string") {
        return `Hello, World!`
    } else if (name.length < 1) {
        return `You must enter a name!`
    } else {
        return `Hello, ${name}!`
    }
}

// Inside of tests.js, write a describe block for our new isFive function.
// As your first, failing test, write an it and an expect asserting that a function named isFive exists.
// Run the tests by refreshing report.html to show the red, failing test.
// Write just enough code inside of code.js to define an empty function for isFive.
// Now, refresh report.html to ensure that all tests are green.
// What other tests and implementation cycles should you do for isFive?
// Ensure that isFive returns a boolean no matter what the input
// Ensure that isFive returns true when passed 5
// What about if we pass in the string "5"? Do you want isFive to return true for that?
// If so, write the test, ensure that the test is failing, and then write the implementation
// Commit your work to git and push to GitHub before moving forward.

// isFive function

let isFive = function (input) {
    return parseInt(input) === 5;
};

//isEven function

let isEven = function (input) {
    if (typeof input === "boolean") {
        return false
    } else {
        return input % 2 === 0;
    }
};

//isVowel function
let vowels = "a, A, e, E, i, I, o, O, u, U,";
let isVowel = function (input) {
    return vowels.includes(input)
}