let arr = [...Array(5).keys()]

function cumSum(arr) {
    return arr.reduce((out,el)=> out+el )
}

console.log(cumSum(arr))