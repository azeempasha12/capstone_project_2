function lengthOfLastWord(s) {
    // Trim the string to remove leading and trailing spaces
    const trimmedString = s.trim();
    
    // Split the string by spaces to get all words
    const words = trimmedString.split(' ');
    
    // The last word is the last element of the words array
    const lastWord = words[words.length - 1];
    
    // Return the length of the last word
    return lastWord.length;
  }
  
  // Test cases
  console.log(lengthOfLastWord("Hello World")); // Output: 5
  console.log(lengthOfLastWord(" fly me to the moon ")); // Output: 4
  console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6
  