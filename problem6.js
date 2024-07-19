function isHappy(n) {
    // Helper function is used calculate the sum of squares of digits
    function calculateSumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    const seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = calculateSumOfSquares(n);
    }

    return n === 1;
}

// examples
console.log(isHappy(19)); // Output: true
console.log(isHappy(4));  // Output: false
console.log(isHappy(7));  // Output: true
