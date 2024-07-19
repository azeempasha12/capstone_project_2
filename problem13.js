function maxcount(nums) {
    let pos = 0;
    let neg = 0;

    for (let num of nums ){
        if(num >0 ){
            pos++;
        } else if (num <0 ) {
            neg++;
        }
    }

    return Math.max(pos,neg)
}

/// exampless
const num1 = [5,20,66,1314]
const result = maxcount(num1);
console.log(result); // output: 4

const num2 = [-2,-1,-1,1,2,3]
const result2 = maxcount(num2)
console.log(result2) // output: 3

const num3 = [-3,-2,-1,0,0,1,2]
const result3 = maxcount(num3)
console.log(result3) // output: 3