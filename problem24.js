function findRelativeRanks(score) {
    // Step 1: Create a list of tuples (score, index)
    const scoresWithIndex = score.map((s, i) => [s, i]);
    
    // Step 2: Sort the list based on scores in descending order
    scoresWithIndex.sort((a, b) => b[0] - a[0]);
    
    // Step 3: Create a result array
    const result = new Array(score.length);
    
    // Step 4: Assign ranks based on sorted order
    for (let i = 0; i < scoresWithIndex.length; i++) {
      const [_, index] = scoresWithIndex[i];
      if (i === 0) result[index] = "Gold Medal";
      else if (i === 1) result[index] = "Silver Medal";
      else if (i === 2) result[index] = "Bronze Medal";
      else result[index] = (i + 1).toString();
    }
    
    return result;
  }
  
  // Test cases
  console.log(findRelativeRanks([5, 4, 3, 2, 1])); // Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
  console.log(findRelativeRanks([10, 3, 8, 9, 4])); // Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
  