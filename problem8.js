var fairCandySwap = function(aliceSizes, bobSizes) {
    // Compute the total candy count for Alice and Bob
    const sumAlice = aliceSizes.reduce((sum, candy) => sum + candy, 0);
    const sumBob = bobSizes.reduce((sum, candy) => sum + candy, 0);
    
    // Compute the target sum difference
    const target = (sumAlice - sumBob) / 2;

    // Create a set for Bob's candy sizes for fast lookup
    const bobSet = new Set(bobSizes);
    
    // Iterate through Alice's candy sizes
    for (const a of aliceSizes) {
        const b = a - target; // Compute the corresponding value in Bob's set
        if (bobSet.has(b)) {
            return [a, b];
        }
    }

};

// Examples
console.log(fairCandySwap([1,1], [2,2])); // Output: [1, 2]
console.log(fairCandySwap([1,2], [2,3])); // Output: [1, 2]
