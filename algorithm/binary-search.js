let input = [...Array(10).keys()]

function binarySearch(arr, target, start= 0, end = arr.length -1) {
    if (start > end) {
        console.log('Not found!');
        return -1;
    } 
    let middle = Math.floor((start+end)/2) 
    // console.log("str: ",start);
    // console.log("mid: ",middle);
    // console.log("emd: ",end);
    // console.log("val: ",arr[middle]);
    // console.log("target: ",target);
    if (arr[middle] < target) {
        // console.log("right");
        return binarySearch(arr, target,middle+1,end)
    }
    
    if (arr[middle] > target){
        // console.log("left");
        return binarySearch(arr,target,start, middle-1)
    }
    
    if (arr[middle] === target) {
        return middle
    }
    
}

console.log(binarySearch(input,2.5))