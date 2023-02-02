// TRICK 1: create range of number

// const range = Array(100).fill(0).map((_, i) => i + 1);
// OR
const range = [...Array(100).keys()];


// TRICK 2: Remove Duplicates from an Array
const unique = [...new Set(arr)]; //<-SET is function that defined unique array

// TRICK 3: Get a Random Element
const random = arr[Math.floor(Math.random() * arr.length)];

// TRICK 4: Loop over a Key-Value Pair
for(const [i, val] of arr.entries()) {
    console.log(i, val);
}

// TRICK 5: Use already exist array method

arr.forEach(); //-> iterate for each element, providing value and index 
arr.map()//-> convert value of arr to different value 
arr.filter(); //-> remove unwanted value
arr.find(); // -> find specific value 
arr.findIndex(); //-> find specific index
arr.reduce(); //-> calculate all value into 1 value

// AVOID USING For In because:
// 1. iterate over property name
// 2. in unspecified order 
// conclusion: unpredictable result

