var callPoints = function(operations) {
    let record = [];

    for (let op of operations) {
        if (op === "C") {
            record.pop();
        } else if (op === "D") {
            record.push(2 * record[record.length - 1]);
        } else if (op === "+") {
            record.push(record[record.length - 1] + record[record.length - 2]);
        } else {
            record.push(parseInt(op));
        }
    }

    return record.reduce((acc, curr) => acc + curr, 0);
};

// examples
console.log(callPoints(["5","2","C","D","+"])); // Output: 30
console.log(callPoints(["5","-2","4","C","D","9","+","+"])); // Output: 27
console.log(callPoints(["1","C"])); // Output: 0
