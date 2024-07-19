var sortPeople = function(names, heights) {
    // Combine names and heights into a single array of objects
    let combined = [];
    for (let i = 0; i < names.length; i++) {
        combined.push({ name: names[i], height: heights[i] });
    }

    // Sort the combined array based on heights in descending order
    combined.sort((a, b) => b.height - a.height);

    // Extract the sorted names
    let sortedNames = combined.map(person => person.name);

    return sortedNames;
};

// examples
console.log(sortPeople(["Mary","John","Emma"], [180,165,170])); // Output: ["Mary","Emma","John"]
console.log(sortPeople(["Alice","Bob","Bob"], [155,185,150])); // Output: ["Bob","Alice","Bob"]
console.log(sortPeople(["Sarah","David","Lily"],height=[155,160,150]))  // outpus: 
