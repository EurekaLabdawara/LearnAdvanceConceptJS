
let arr = [...Array(5).keys()]

export function cumSum(arr) {
    return arr.reduce((out,el)=> out+el )
}

// console.log(cumSum(arr))