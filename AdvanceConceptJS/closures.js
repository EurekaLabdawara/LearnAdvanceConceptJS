// closure
// closure is a function that behave getting property in global scope (bind with outer state/lexical environtment)
// more memory and computation with the trade off of mutability accross
// (property stored in heap memory -> long term and garbage collected) 

// other common implementation is for data encapsulation
// example
function encapsulatedState(x) {
    let state = 10;
    return function() {
      state += x;
      return state;
    }
  }

  encapsulatedState(3) // state = 13 <- data not directly changed