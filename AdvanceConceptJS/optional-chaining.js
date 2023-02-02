const obj = undefined

// instead of 
// if (obj && obj.hello){
//     console.log(object.hello)
// }
// better (more concise) with
// obj?.hello -> will return undefined and not error

console.log(obj?.hello)

// it could be used for array and function too
// example
const arr = [1,2,3]
arr?.[0]

function foo(a,b) {
    
}

foo?.(1,2);