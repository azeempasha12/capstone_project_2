var findErrorNums = function(nums) {
    let numSet = new Set();
    let duplicate = -1;
    let missing = -1;
    let n = nums.length;

    // Identify duplicate number
    for (let num of nums) {
        if (numSet.has(num)) {
            duplicate = num;
        } else {
            numSet.add(num);
        }
    }

    // Identify missing number
    for (let i = 1; i <= n; i++) {
        if (!numSet.has(i)) {
            missing = i;
            break;
        }
    }

    return [duplicate, missing];
};

// examples
console.log(findErrorNums([1, 2, 2, 4])); // Output: [2, 3]
console.log(findErrorNums([3, 2, 3, 4, 5])); // Output: [3, 1]
console.log(findErrorNums([1, 2, 3, 4, 5, 6, 7, 8, 8])); // Output: [8, 9]
