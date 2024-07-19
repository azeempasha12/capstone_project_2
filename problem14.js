var minimumSum = function (num) {

    const digits = num.toString().split('').map(Number);
    digits.sort((a, b) => a - b);


    const num1 = digits[0] * 10 + digits[2];
    const num2 = digits[1] * 10 + digits[3];

    // Return the sum of the two numbers
    return num1 + num2;
};

// Example:
console.log(minimumSum(2932)); // Output: 52
console.log(minimumSum(4009)); // Output: 13
