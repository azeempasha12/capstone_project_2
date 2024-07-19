function isPalindrome(num) {
    const str = num.toString();
    let i = 0, j = str.length - 1;
    
    while (i < j) {
        if (str[i] !== str[j]) {
            return false; // Not a palindrome if characters do not match
        }
        i++;
        j--;
    }
    
    return true; // Palindrome if all characters match
}

// Examples
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(1451));  // Output: true
console.log(isPalindrome(12345)); // Output: false
