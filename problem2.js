var minAddToMakeValid = function(s) {
    let open = 0, close = 0;

    for(let c of s) {
        if (c === '(') {
            open++;
        } else if (open > 0) {
            open--;
        } else {
            close++;
        }
    }

    return open + close;
};

// Example:
console.log(minAddToMakeValid("(()")); // Output: 1
console.log(minAddToMakeValid("())")); // Output: 1
console.log(minAddToMakeValid("()))((")); // Output: 4
