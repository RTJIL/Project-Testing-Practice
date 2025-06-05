# Project-Testing-Practice
# 🔬 JavaScript Testing Playground
This project is a collection of basic JavaScript functions, built to test your skills with TDD (Test Driven Development) using your favorite testing framework (like Jest). You'll write tests first, then make the code pass. Yup, it's one of those challenges.

## 🚀 What’s Inside
You’ll implement and test the following:

### ✅ capitalize(string)
Purpose: Returns the input string with the first character capitalized.

capitalize('hello') ➡️ 'Hello'

### 🔄 reverseString(string)
Purpose: Returns the reversed version of the input string.

reverseString('hello') ➡️ 'olleh'

### ➕➖ calculator Object
Purpose: Provides basic math operations as methods.

const calculator = {
  add(a, b),         // ➡️ a + b
  subtract(a, b),    // ➡️ a - b
  divide(a, b),      // ➡️ a / b
  multiply(a, b),    // ➡️ a * b
};
Example:

calculator.multiply(3, 4) ➡️ 12

### 🔐 caesarCipher(string, shift)
Purpose: Applies a Caesar Cipher to the input string with the given shift value.

Shifts only alphabet letters.

Wraps around the alphabet (z → a).

Preserves case.

Ignores punctuation, spaces, etc.

Examples:
caesarCipher('xyz', 3);          // ➡️ 'abc'
caesarCipher('HeLLo', 3);        // ➡️ 'KhOOr'
caesarCipher('Hello, World!', 3); // ➡️ 'Khoor, Zruog!'
📊 analyzeArray(array)
Purpose: Returns an object with stats from the array.


analyzeArray([1, 8, 3, 4, 2, 6]);
// ➡️ {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// }
## 🧪 Testing Strategy
Use unit tests to validate the behavior of each public function.

For caesarCipher, only test the final exported function (not helper functions).

Cover edge cases (like empty strings, punctuation, large shifts, etc.).

## 📦 Setup
Clone the repo

Install dependencies (like Jest):

npm install
Run tests:

npm test
