
// SPREAD OPERATOR (...) -> commonly used to combine different objects into 1
// with the priority of the value of last object if there are common properties shared between objects
// example:
const obj1 = {
    'first':'a',
    'second':'b',
    'third': 'c'
}

const obj2 = {
    'third': 'd',
    'fourth':'e'
}

const full = {...obj1,...obj2}
// result:
// full = {
//     'first':'a',
//     'second':'b',
//     'third': 'd',
//     'fourth':'e'
// }
// or alternatively
// const obj2 = {
//     ...obj1, <- position matters for value override with common priorities, the first will be override
//     'third': 'd',
//     'fourth':'e'
// }

