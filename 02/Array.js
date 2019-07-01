console.log('Hello world!')
//node filename.js

let arrayObject = ['Start','Run','End']
console.log('Beginning : ',arrayObject)
// push, slice, splice, shift, unshift, pop
arrayObject.push('Extend')
//arrayObject.splice(arrayObject.length,0,'Extend')
console.log('push : ',arrayObject)

arrayObject.pop()
//arrayObject.slice(0,arrayObject.length)
console.log('pop : ',arrayObject)

arrayObject.unshift('Preparation')
//arrayObject.splice(0,0,'Preparation')
console.log('unshift : ',arrayObject)

arrayObject.shift()
//arrayObject.slice(1)
console.log('shift : ',arrayObject)

console.log('Array length : ',arrayObject.length)

let result = arrayObject.join(' ')
console.log('Joined : ',result)

let splitted = result.split(' ')
console.log('Splitted : ',splitted)

