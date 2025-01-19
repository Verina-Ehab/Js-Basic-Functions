// index.js
const {
    sum,
    isPrime,
    reverseStr,
    largestNumberBuiltIn,
    largestNumberManual,
    evenNumbers,
    reverseStrManual,
    avg,
    dayType,
    filterDivisibleBy2Or3,
    findElementIndex,
    factorial,
    getObjectKeys,
    getUniqueNumbers,
    countCharacterOccurrences,
    sortNumbersAscending,
    areAnagrams,
    createCar,
    hasProperty,
    mathOperation,
} = require("./functions");


// Test cases
console.log("1. Sum:", sum(3, 5));
console.log("2. Is prime:", isPrime(100));
console.log("2. Is prime:", isPrime(11));
console.log("3. Reverse string:", reverseStr("VERINA"));

console.log("4. Largest number:", largestNumberBuiltIn([1, 3, 7, 2, 4]));
console.log("4. Largest number:", largestNumberManual([1, 3, 7, 2, 4]));

console.log("6. Reverse string without built in method:", reverseStrManual("verina"));

console.log("5. Even numbers:", evenNumbers([1, 2, 3, 4, 5, 6]));
console.log("7. Average:", avg([1, 2, 3, 4, 5]));

console.log("8. Day type:", dayType(5));
console.log("8. Day type:", dayType(7));

console.log("9. Divisible by 2 or 3:", filterDivisibleBy2Or3([1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log("10. Find index:", findElementIndex([1, 2, 3, 4, 5], 3));
console.log("10. Find index:", findElementIndex([1, 2, 3, 4, 5], 10));

console.log("11. Factorial:", factorial(5));
console.log("12. Object keys:", getObjectKeys({ name: "John", age: 30 }));
console.log("13. Unique numbers:", getUniqueNumbers([1, 2, 2, 3, 4, 4, 5]));
console.log("14. Character occurrences:", countCharacterOccurrences("hello"));
console.log("15. Sorted numbers:", sortNumbersAscending([5, 3, 8, 1, 2]));
console.log("16. Are anagrams:", areAnagrams("listen", "silent"));

const car = createCar("Toyota", 2020);
console.log("17. Car details:", car.displayDetails());

console.log("19. Has property:", hasProperty({ name: "Alice", age: 25 }, "name"));
console.log("19. Has property:", hasProperty({ name: "Alice", age: 25 }, "address"));

console.log("20. Math operation:", mathOperation(5, 3, "+"));
console.log("20. Math operation:", mathOperation(5, 3, "%"));