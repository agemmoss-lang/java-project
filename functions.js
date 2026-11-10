/* ---------- String functions ---------- */

// Reverse a string
function reverseString(str) {
  return [...str].reverse().join("");
}

// Count characters (spaces included)
function countCharacters(str) {
  return [...str].length;
}

// Capitalize the first letter of each word
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => (word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word))
    .join(" ");
}

/* ---------- Array functions ---------- */

// Maximum and minimum
function findMax(numbers) {
  if (numbers.length === 0) return undefined;
  return Math.max(...numbers);
}

function findMin(numbers) {
  if (numbers.length === 0) return undefined;
  return Math.min(...numbers);
}

// Sum of all elements
function sumArray(numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

// Keep only elements that pass a condition
function filterArray(array, condition) {
  return array.filter(condition);
}

/* ---------- Math functions ---------- */

// Factorial: 5! = 5 * 4 * 3 * 2 * 1
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Factorial needs a non-negative integer");
  }
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

// Prime check: only test divisors up to the square root
function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Fibonacci sequence with a given number of terms
function fibonacci(terms) {
  const sequence = [];
  for (let i = 0; i < terms; i++) {
    sequence.push(i < 2 ? i : sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

/* ---------- Try it ---------- */
console.log(reverseString("hello"));                 // olleh
console.log(countCharacters("hello world"));         // 11
console.log(capitalizeWords("the quick brown fox")); // The Quick Brown Fox
console.log(findMax([4, 9, 2, 15, 7]));              // 15
console.log(findMin([4, 9, 2, 15, 7]));              // 2
console.log(sumArray([4, 9, 2, 15, 7]));             // 37
console.log(filterArray([4, 9, 2, 15, 7], n => n > 5)); // [9, 15, 7]
console.log(factorial(5));                           // 120
console.log(isPrime(17), isPrime(18));               // true false
console.log(fibonacci(10));                          // [0,1,1,2,3,5,8,13,21,34]