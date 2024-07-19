// Function to find the maximum bitwise AND value of any pair in the array
function maxBitwise(arr) {
    let maxAndValue = 0;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        const andValue = arr[i] & arr[j];
        if (andValue > maxAndValue) {
          maxAndValue = andValue;
        }
      }
    }
  
    return maxAndValue;
  }
  
  // Best-Case Scenario
  const bestCaseInput = [2,3,4,5,6];
  console.log('Best Case Input:', bestCaseInput);
  console.log('Output:', maxBitwise(bestCaseInput)); // Expected Output: 14
  
  // Worst-Case Scenario
  const worstCaseInput = [10,12,6,8];
  console.log('Worst Case Input:', worstCaseInput);
  console.log('Output:', maxBitwise(worstCaseInput)); // Expected Output: 255
  