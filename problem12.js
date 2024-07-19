var sortColors = function(nums) {
    let redPtr = 0;
    let whitePtr = 0; 
    let bluePtr = nums.length - 1;

    while (whitePtr <= bluePtr) {
        if (nums[whitePtr] === 0) {
            // Swap the 0 to the redPtr position
            [nums[redPtr], nums[whitePtr]] = [nums[whitePtr], nums[redPtr]];
            redPtr++;
            whitePtr++;
        } else if (nums[whitePtr] === 1) {
            // Move to the next position
            whitePtr++;
        } else {
            // Swap the 2 to the bluePtr position
            [nums[whitePtr], nums[bluePtr]] = [nums[bluePtr], nums[whitePtr]];
            bluePtr--;
            // Do not increment whitePtr here to re-evaluate the swapped element
        }
    }
    return nums; // Return the sorted array
};

// Example usage:
console.log(sortColors([2,0,2,1,1,0])); // Output: [0,0,1,1,2,2]
console.log(sortColors([2,0,1])); // Output: [0,1,2]
