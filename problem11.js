const arr = [1,2,1,3,5,6,4]
const findPeak = (arr) => {
    let max = arr[0];
        let maxIndex = 0;
    
    for(let i = 1; i< arr.length; i++) {
        const presentElement = arr[i];
        if(presentElement > max ) {
            max = presentElement;
            maxIndex = i;
        }
    }


    console.log("Maximum element:" ,max)
    console.log("Index of maximum element:" ,maxIndex)

    return maxIndex;
}

findPeak(arr)