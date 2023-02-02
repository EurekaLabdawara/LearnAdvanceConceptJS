// introduced in ES2020
// only return the right side of operator only if the left side is null or undefined 
const foo = null ?? 'bar';
console.log(foo); // 'bar'

const fiz = 0 ?? 'bar';
console.log(fiz); // 0