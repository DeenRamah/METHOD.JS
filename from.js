//from() = it creates an array from  an array-like object or an iterable object. also can take up to two arguments, the object convert to an array and a 
//mapping function to apply to each element of the arraty

const obj = {0: 'apple', 1: 'monk', 2: 'tas', length: 3 }
const arr = Array.from(obj)
console.log(arr)