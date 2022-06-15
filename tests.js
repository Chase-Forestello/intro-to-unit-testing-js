// Incomplete(finished TDD tests. Time to refactor) - JavaScript I - Testing User Functions - Exercise
// COMPLETE BY NEXT ASSESSMENT

// Unit tests for the helloWorld function

describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the sayHello function

describe("sayHello", function () {
    it("should be a defined function", function () {
        expect(typeof sayHello).toBe("function");
    });
    it("should be a string", function () {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return the string 'Hello, Jane!' when passeds 'Jane'", function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return the string 'Hello, Alex!' when passed 'Alex'", function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return the string 'Hello, Pat!' when passed 'Pat'", function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return the string 'Hello, World!' when passed an undefined variable", function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when passed 'true'", function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it("should return the string 'Hello, World!' when passed 'false'", function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
    it("should return the string 'Hello, World!' when passed 'null'", function () {
        expect(sayHello(null)).toBe("Hello, World!")
    });
    it("should return the string 'You must enter a name!' when passed an empty string: ''", function () {
        expect(sayHello("")).toBe("You must enter a name!")
    });
});

// Unit tests for isFive function

describe("isFive", function () {
    it("should be a defined function", function () {
        expect(typeof isFive).toBe("function")
    });
    it("should return true when passed 5", function () {
        expect(isFive(5)).toBe(true)
    });
    it("should return a boolean no matter the input", function () {
        expect(isFive()).toBe(typeof input === "boolean")
    });
    it("should return true if the string: '5' is passed", function () {
        expect(isFive("5")).toBe(true)
    });
})

// Unit tests for isEven function

describe("isEven", function () {
    it("should be a defined function", function () {
        expect(typeof isEven).toBe("function")
    });
    it("should return a boolean no matter the input", function () {
        expect(isEven()).toBe(typeof input === "boolean")
    });
    it("should return true if 2 is passed (string or integer)", function () {
        expect(isEven(2)).toBe(true)
    });
    it("should return true if -4 is passed (string or integer)", function () {
        expect(isEven(-4)).toBe(true)
    });
    it("should return false if 3 is passed (string or integer)", function () {
        expect(isEven(3)).toBe(false)
    });
    it("should return false if the string 'banana' is passed", function () {
        expect(isEven("banana")).toBe(false)
    });
    it("should return true if the numerical string '8' is passed", function () {
        expect(isEven("8")).toBe(true)
    });
    it("should return false if Infinity is passed", function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it("should return false if any boolean is passed", function () {
        expect(isEven(true)).toBe(false)
    });
    it("should return false when called without an argument", function () {
        expect(isEven()).toBe(false)
    });
});

// Unit tests for isVowel

describe("isVowel", function () {
    it("should be a defined function", function () {
        expect(typeof isVowel).toBe("function")
    });
    it("should return true if passed the string 'a'", function () {
        expect(isVowel("a")).toBe(true)
    });
    it("should return true if passed the string 'A'", function () {
        expect(isVowel("A")).toBe(true)
    });
    it("should return true if passed the string 'y'", function () {
        expect(isVowel("y")).toBe(false)
    });
    it("should return true if passed the number 4", function () {
        expect(isVowel(4)).toBe(false)
    });
    it("should return false if true is passed", function () {
        expect(isVowel(true)).toBe(false)
    });
    it("should return false if false is passed", function () {
        expect(isVowel(false)).toBe(false)
    });
    it("should return false if passed the string 'banana'", function () {
        expect(isVowel("banana")).toBe(false)
    });
    it("should return false if passed with no variable", function () {
        expect(isVowel()).toBe(false)
    });
    it("should return true if passed the string 'e'", function () {
        expect(isVowel("e")).toBe(true)
    });
    it("should return true if passed the string 'E'", function () {
        expect(isVowel("E")).toBe(true)
    });
    it("should return true if passed the string 'i'", function () {
        expect(isVowel("i")).toBe(true)
    });
    it("should return true if passed the string 'I'", function () {
        expect(isVowel("I")).toBe(true)
    });
    it("should return true if passed the string 'o'", function () {
        expect(isVowel("o")).toBe(true)
    });
    it("should return true if passed the string 'O'", function () {
        expect(isVowel("O")).toBe(true)
    });
    it("should return true if passed the string 'u'", function () {
        expect(isVowel("u")).toBe(true)
    });
    it("should return true if passed the string 'U'", function () {
        expect(isVowel("U")).toBe(true)
    });
});

// Unit tests for add
// Assert that add:
// add(2, 3) returns 5
// add(-3, -9) returns -12
// add("5", 6) returns 11
// add("-4", "10") returns 6
// add("banana", "split") returns NaN
// add(2, "apples") returns NaN
// add() returns NaN
// Start with the smallest tests first.
// Write just enough code to green the test
// Build up functionality one small piece at a time.
// If any input is not a number, return NaN
// Refactor, if possible
// Repeat until the tests are robust and the function works as intended.
// Commit your work to git and push to GitHub.

describe("add", function () {
    it("should be a defined function", function () {
        expect(typeof add).toBe("function")
    });
    it("should return 5 if passed the numbers 2 and 3", function () {
        expect(add(2, 3)).toBe(5)
    });
    it("should return -12 if passed the numbers -3 and -9", function () {
        expect(add(-3,-9)).toBe(-12)
    })
    it("should return 11 if passed the string '5' and the number 6", function () {
        expect(add("5",6)).toBe(11)
    })
    it("should return 6 if passed the string '-4' and the number '10'", function () {
        expect(add("-4","10")).toBe(6)
    })
});