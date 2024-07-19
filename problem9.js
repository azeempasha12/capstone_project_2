function nextGreatestLetter(letters, target) {
    const letterSet = new Set(letters);
    for (const letter of letters) {
        if (letter > target) {
            return letter;
        }
    }

    // If no letter is found greater than target, return the first letter
    return letters[0];
}

// Examples
console.log(nextGreatestLetter(["c", "f", "j"], "a")); // Output: "c"
console.log(nextGreatestLetter(["c", "f", "j"], "c")); // Output: "f"
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z")); // Output: "x"
