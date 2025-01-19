// 1. Sum
function sum(x, y) {
    return x + y;
}


// 2. Prime Number
// We don't need to check all numbers up to number to see if they are divisors. 
// A fundamental optimization in primality tests is that if a number number has a divisor greater than its square root, 
// it must also have a divisor smaller than its square root. This is because divisors come in pairs, 
// and one must be less or equal to the square root.

// EXAMPLES:
// 100 isPrime?, the numbers before and after the square root 10, are 
// 2*50, 4*25, 5*20, 10*10, etc. If you find a divisor bigger than 10, we have already checked 2, 4, 5 in previous iterations, 
// so if we have not found any divisor at 10 we know it will not have divisor bigger than 10 either.

// number is 10.
// The base case 10 <= 1 is false, so the code does not return.
// The loop starts with i = 2.
// i will iterate until i <= Math.sqrt(10).
// The Math.sqrt(10) is approximately 3.16. Therefore i will be 2 and 3.
// 10 % 2 is 0. The if condition is met, so the code immediately returns false.
// The function stops there and doesn't complete the loop.
function isPrime(a) {
    if (a <= 1) return false;
    for (let index = 2; index < Math.sqrt(a); index++) {
        if (a % index === 0) return false;
    }
    return true;
}


// 3. Reverse string (using built-in functions)
//      1.splite in an arr
//      2.reverse this arr
//      3.join this array contents
function reverseStr(str) {
    return str.split("").reverse().join("")
}
// 6. Reverse string (without built-in method)
function reverseStrManual(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}



// 4. largest number in an arr
// why spread operator?
// It does not accept an array as its direct argument. 
// It expects individual numbers as separate arguments, like: Math.max(1, 5, 2, 8).
function largestNumberBuiltIn(arr) {
    return Math.max(...arr);
}

function largestNumberManual(arr) {
    if (!arr || arr.length === 0) {
        // return "empty array"
        return undefined;
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}


// 5. Filter even numbers from an array
function evenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 7. Average of an array
function avg(arr) {
    if (!arr || arr.length === 0) return 0;
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
}


// 8. Determine if a day is a weekday or weekend
function dayType(dayNumber) {
    if (dayNumber < 1 || dayNumber > 7) return "Invalid day number";
    return ((dayNumber >= 1) && (dayNumber < 6)) ? "Weekday" : "Weekend";
}


// 9. Filter numbers divisible by 2 or 3
function filterDivisibleBy2Or3(arr) {
    return arr.filter((number) => number % 2 === 0 || number % 3 === 0);
}



// 10. Find the index of an element in an array
function findElementIndex(arr, element) {
    const index = arr.indexOf(element);
    return (index !== -1) ? index : -1;
}



// 11. Calculate the factorial of a given number
function factorial(number) {
    if (number === 0) return 1;
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}



// 12. Get object keys as array
function getObjectKeys(obj) {
    return Object.keys(obj);
}

// 13. Get unique numbers from an array
function getUniqueNumbers(arr) {
    // return new Set(arr);   //output=> Set(5) { 1, 2, 3, 4, 5 }
    return [...new Set(arr)]; //output=> [ 1, 2, 3, 4, 5 ]
}



// 14. Count occurrences of each character in a string
function countCharacterOccurrences(str) {
    const charCounts = {};

    // for (let char of str) { 
    //     if (charCount[char]) {
    //       charCount[char]++; 
    //     } else {
    //       charCount[char] = 1; 
    //     }
    //   }
    //   return charCount;

    // OR

    for (const char of str) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    return charCounts;
}


// 15. Sort an array of numbers in ascending order
function sortNumbersAscending(arr) {
    // return arr.sort();
    // OR
    return arr.sort((a, b) => a - b);
}



// 16. Check if two strings are anagrams
function areAnagrams(str1, str2) {
    const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }
    const s = (str) => str.split("").sort().join("")
    return s(cleanStr1) === s(cleanStr2);
}



// 17. Create a car object with a method to display details
function createCar(model, year) {
    return {
        model: model,
        year: year,
        displayDetails: function () {
            return `Model: ${this.model}, Year: ${this.year}`;
        },
    };
}




// 19. Check if a given object contains a specific property
function hasProperty(obj, prop) {
    // return Object.prototype.hasOwnProperty.call(obj, prop);
    //OR
    return obj.hasOwnProperty(prop);
}

// 20. Mathematical operation on two numbers
function mathOperation(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}



module.exports = {
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
    mathOperation
};