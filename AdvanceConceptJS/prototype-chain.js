// PROTOTYPE CHAINING example
const animal = {
    "dna": 123,
}

const dog = {
    bark (){
        console.log("woof")
    }
}

// we are setting of the prototype of dog is from animal; animal class is the parent of the dog class
Object.setPrototypeOf(dog,animal)
// implication dog class has the property of animal class
// (ex: dna, even tho it not explicitly defined in the dog class)