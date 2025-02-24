/*
Assignment: Day 9
Section 1: Data Types & Length

1)Ans
    "==" checks for value equality and performs type coercion, so "5" is converted to 5, making the comparison true.
    "===" checks for both value and type equality, and since "5" (string) and 5 (number) are different types, it returns false.

2)Ans

    function longestWordLength(words) {
        return Math.max(...words.map(word => word.length));
    }
    const words = ["JavaScript", "Programming", "Function", "Hoisting"];
    console.log(longestWordLength(words));

Section 2: let, const, var & Scope

3)Ans
    10
    ReferenceError: b is not defined
    ReferenceError: c is not defined
    "var a" is accessible outside the block.
    "let b" and "const c" inaccessible outside the "if" block.

4)Ans
    const name = "John"; 
    function greet() { 
        if (true) { 
        const message = "Hello " + name; 
        console.log(message);
        } 
    }
greet();

Section 3: Traditional Function vs. Arrow Function

5)Ans
    const multiply = (a, b) => a * b;

6)Ans
    Output: "Hello, Alice"
    The arrow function inside "setTimeout" inherits it from "sayHello.

Section 4: Hoisting

7)Ans
    undefined
    ReferenceError: Cannot access 'b' before initialization

8)Ans
    console.log(square(5)); // 25
    function square(n) { 
        return n * n; 
    } 
    const double = function(n) { 
        return n * 2; 
    };
    console.log(double(4)); // 8

Section 5: Operators (Arithmetic, Assignment, Comparison, Logical)
9)Ans
    "55" (string concatenation)
    2 (string converted to number)
    10 (string converted to number)
    5 (string converted to number)
    1 (string converted to number)

10)Ans
    let x = 10;
    x += 5;
    x *= 2;
    x -= 3;
    x /= 2;

11)Ans

    True
    True
    False

12)Ans

    10 (default c=5)
    15 (c is overridden)

13)Ans

    function sumAll(...args) { 
    return args.reduce((acc, val) => acc + val, 0); 
    }
    console.log(sumAll(1, 2, 3, 4));

14)Ans

    fixed the outer functions:

        function outer() { 
        let count = 0; 
        return function inner() { 
        count++; 
        console.log(count); 
        }; 
    }   
    const counter1 = outer(); 
    counter1(); // 1
    counter1(); // 2
    const counter2 = outer(); 
    counter2(); // 1
    counter2(); // 2

SOME STATEMENT QUESTIONS    :

1)Ans
    function reverseNumber(num) {
    let isNegative = num < 0;
    let str = "" + Math.abs(num);
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return isNegative ? -Number(reversedStr) : Number(reversedStr);
}
console.log(reverseNumber(1234)); // 4321
console.log(reverseNumber(-567)); // -765

2)Ans

    function customLength(str) {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}
console.log(customLength("JavaScript")); // 10

3)Ans

    console.log(add(2, 3)); // 5

function add(a, b) { 
    return a + b; 
}

console.log(multiply(2, 3)); // 6

function multiply(a, b) { 
    return a * b; 
}

4)Ans

    function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const count = counter();
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3

*/
