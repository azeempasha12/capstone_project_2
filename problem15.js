function transitionPoint(arr) {
    let left = 0;
    let right = arr.length - 1;
    let transitionIndex = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === 1) {
            transitionIndex = mid; 
            right = mid - 1;
        } else {
            left = mid + 1; // Search right side
        }
    }

    return transitionIndex;
}

// Examples
console.log(transitionPoint([0,0,0,1,1]))
console.log(transitionPoint([0,0,0,0]))
