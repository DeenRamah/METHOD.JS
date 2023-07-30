//entries() returns a new array iteration object that contains 
//the key/value pairs for each index in an array

const arr = ["a", "b", "c"]
const iterator = arr.entries()
console.log( iterator.next())
console.log( iterator.next())
console.log( iterator.next())
