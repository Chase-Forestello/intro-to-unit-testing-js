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

describe("isFive", function() {
    it("should be a defined function", function () {
        expect(typeof isFive).toBe("function")
    });
    it("should return true when passed 5" , function () {
        expect(isFive(5)).toBe(true)
    });
    it("should return a boolean no matter the input", function () {
        expect(isFive()).toBe(typeof input === "boolean")
    });
    it("should return true if the string: '5' is passed", function() {
        expect(isFive("5")).toBe(true)
    });
})

// Unit tests for isEven function

describe("isEven", function() {
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
})

// Unit tests for isVowel

//isVowel always returns a boolean
// isVowel("a") returns true
// isVowel("A") returns true
// isVowel("y") returns false
// isVowel(4) returns false
// isVowel(true) or isVowel(false) both return false
// isVowel("banana") returns false
// isVowel() returns false

describe("isVowel", function() {
    it("should be a defined function", function () {
        expect(typeof isVowel).toBe("function")
    })
})