// 1)
// const student = {
//     name: "Aryan Kumar",
//     rollNumber: 101,
//     marks: {
//       Math: 80,
//       Science: 65,
//       English: 50,
//       History: 70
//     },
//     getAverageMarks: function() {
//       let totalMarks = 0;
//       let subjects = Object.keys(this.marks);
      
//       subjects.forEach(subject => {
//         totalMarks += this.marks[subject];
//       });
  
//       return totalMarks / subjects.length;
//     },
//     checkPassOrFail: function() {
//       return this.getAverageMarks() > 40 ? "Passed" : "Failed";
//     }
//   };
  
//   console.log(student.getAverageMarks()); // Output: 66.25
//   console.log(student.checkPassOrFail()); // Output: "Passed"
  
// 2)
// const library = {
//     books: {
//       "Atomic Habits": { author: "James Clear", availableCopies: 3 },
//       "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 },
//     },
  
//     borrowBook: function (bookName) {
//       if (this.books[bookName]) {
//         if (this.books[bookName].availableCopies > 0) {
//           this.books[bookName].availableCopies--;
//           console.log(You have borrowed "${bookName}".);
//         } else {
//           console.log(Sorry, "${bookName}" is currently out of stock.);
//         }
//       } else {
//         console.log("${bookName}" is not available in the library.);
//       }
//     },
  
//     returnBook: function (bookName) {
//       if (this.books[bookName]) {
//         this.books[bookName].availableCopies++;
//         console.log(You have returned "${bookName}".);
//       } else {
//         console.log("${bookName}" is not part of this library.);
//       }
//     },
//   };
  
//   // Example usage:
//   library.borrowBook("Atomic Habits");
//   console.log(library.books["Atomic Habits"].availableCopies); // Output: 2
  
//   library.returnBook("Atomic Habits");
//   console.log(library.books["Atomic Habits"].availableCopies); // Output: 3
  
// 3)
// function generateTable(num, limit) {
//     for (let i = 1; i <= limit; i++) {
//       console.log(${num} x ${i} = ${num * i});
//     }
//   }
  
//   // Example usage:
//   generateTable(5, 10);
  
// 4)
// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//       if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//       } else if (i % 3 === 0) {
//         console.log("Fizz");
//       } else if (i % 5 === 0) {
//         console.log("Buzz");
//       } else {
//         console.log(i);
//       }
//     }
//   }
  
//   // Example usage:
//   fizzBuzz(15);
  
// 5)
// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//   }
  
//   // Example usage:
//   console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
  
// 6)
// function removeDuplicates(arr) {
//     let uniqueArr = [];
    
//     for (let i = 0; i < arr.length; i++) {
//       if (!uniqueArr.includes(arr[i])) {
//         uniqueArr.push(arr[i]);
//       }
//     }
  
//     return uniqueArr;
//   }
  
//   // Example usage:
//   console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 1, 6])); // Output: [1, 2, 3, 4, 5, 6]
  
// 7)
// function longestWord(sentence) {
//     let words = sentence.split(" ");
//     let longest = "";
  
//     for (let word of words) {
//       if (word.length > longest.length) {
//         longest = word;
//       }
//     }
  
//     return longest;
//   }
  
//   // Example usage:
//   console.log(longestWord("Coding is amazing and challenging")); // Output: "challenging"
  
// 8)
// function myMap(arr, callback) {
//     let result = [];
    
//     for (let i = 0; i < arr.length; i++) {
//       result.push(callback(arr[i], i, arr)); // Pass current element, index, and full array
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   function myCallback(x) {
//     return x * 2;
//   }
  
//   console.log(myMap([1, 2, 3, 4], myCallback)); // Output: [2, 4, 6, 8]
  
// 9)
// function firstUniqueCharacter(str) {
//     let charCount = {};
  
//     // Count occurrences of each character
//     for (let char of str) {
//       charCount[char] = (charCount[char] || 0) + 1;
//     }
  
//     // Find the first character with count 1
//     for (let char of str) {
//       if (charCount[char] === 1) {
//         return char;
//       }
//     }
  
//     return null; // Return null if no unique character is found
//   }
  
//   // Example usage:
//   console.log(firstUniqueCharacter("aabbcddce")); // Output: "e"
  
// 10)
// function findPairs(arr, target) {
//     let pairs = [];
//     let seen = new Set();
  
//     for (let num of arr) {
//       let complement = target - num;
  
//       if (seen.has(complement)) {
//         pairs.push([complement, num]);
//       }
  
//       seen.add(num);
//     }
  
//     return pairs;
//   }
  
//   // Example usage:
//   console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10)); 
//   // Output: [ [3, 7], [2, 8], [5, 5] ]
  
// 11)
// class Stack {
//     constructor() {
//       this.items = [];
//     }
  
//     // Push: Add an element to the stack
//     push(value) {
//       this.items.push(value);
//     }
  
//     // Pop: Remove and return the last added element
//     pop() {
//       return this.items.length > 0 ? this.items.pop() : null;
//     }
  
//     // Peek: Return the last added element without removing it
//     peek() {
//       return this.items.length > 0 ? this.items[this.items.length - 1] : null;
//     }
  
//     // isEmpty: Check if the stack is empty
//     isEmpty() {
//       return this.items.length === 0;
//     }
//   }
  
//   // Example usage:
//   let myStack = new Stack();
//   myStack.push(10);
//   myStack.push(20);
//   console.log(myStack.pop()); // Output: 20
//   console.log(myStack.peek()); // Output: 10
//   console.log(myStack.isEmpty()); // Output: false
  
// 12)
// function replaceNumbersWithSum(str) {
//     let numbers = str.match(/\d+/g) || []; // Extract all numbers as an array
//     let sum = numbers.reduce((acc, num) => acc + Number(num), 0); // Sum all numbers
//     return str.replace(/\d+/g, "") + sum; // Remove numbers and append sum
//   }
  
//   // Example usage:
//   console.log(replaceNumbersWithSum("abc123xyz45pq7")); // Output: "abc175pq"
  
// 13)
// function mostFrequentElement(arr) {
//     let frequencyMap = {};
//     let maxCount = 0;
//     let mostFrequent = null;
  
//     // Count the occurrences of each element
//     for (let num of arr) {
//       frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  
//       // Update mostFrequent if this number has a higher count
//       if (frequencyMap[num] > maxCount) {
//         maxCount = frequencyMap[num];
//         mostFrequent = num;
//       }
//     }
  
//     return mostFrequent;
//   }
  
//   // Example usage:
//   console.log(mostFrequentElement([1, 3, 2, 3, 4, 1, 3, 2, 3, 5])); // Output: 3