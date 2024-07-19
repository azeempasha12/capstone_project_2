function searchRange(nums, target) {
    // Helper function to find the first occurrence of target
    function findFirstOccurrence(nums, target) {
        let low = 0, high = nums.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (nums[mid] < target) {
                low = mid + 1;
            } else if (nums[mid] > target) {
                high = mid - 1;
            } else {
                if (mid === 0 || nums[mid - 1] !== target) {
                    return mid;
                }
                high = mid - 1;
            }
        }
        return -1;
    }

    // Helper function to find the last occurrence of target
    function findLastOccurrence(nums, target) {
        let low = 0, high = nums.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (nums[mid] < target) {
                low = mid + 1;
            } else if (nums[mid] > target) {
                high = mid - 1;
            } else {
                if (mid === nums.length - 1 || nums[mid + 1] !== target) {
                    return mid;
                }
                low = mid + 1;
            }
        }
        return -1;
    }

    // Find first and last occurrences
    let start = findFirstOccurrence(nums, target);
    let end = findLastOccurrence(nums, target);

    return [start, end];
}

// Examples
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
console.log(searchRange([], 0)); // Output: [-1, -1]
