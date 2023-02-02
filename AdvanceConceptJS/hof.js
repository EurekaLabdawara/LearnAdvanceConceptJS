// High Order Function (hof)
// function that take another function as an argument or return a function
// example
// A function that takes a function as an argument
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function math(x, y, operator) {
    return operator(x, y);
}
  
math(5, 2, add); // 7


// remember
// 1. JS is multiparadigm built in for functional language
// 2. Function in JS is inherit from object

// there are 2 diff method to make function
// 1. declarative way <- will be hoisted so it could be used anywhere (before declaration too) in this file
// general rule : global scope function
function foo(params) {
    
}

// 2. expressive way <- only known when intrepeter hit it first
// general rule: local scope function (module or file)
const foo = function name(params) {
    
}



