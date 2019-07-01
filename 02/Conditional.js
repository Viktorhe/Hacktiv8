let equal = 2 === 2 && 'one' === 'one'
console.log("2 === 2 && 'one' === 'one'",equal)
let notEqual = 1 != 2 || 2 != 4
console.log('1 != 2 || 2 != 4', notEqual)
let more = 2 > 1
console.log('2 > 1',more)
let less = 2 < 3
console.log('2 < 3',less)

let firstResult = 1
if(firstResult == 1)
    console.log('true because firstResult = ',firstResult)
else
    console.log('else because firstResult = ',firstResult)

let secondResult = 2
if(secondResult == 1)
    console.log('true because secondResult = ',secondResult)
else
    console.log('else because secondResult = ',secondResult)

let shortcut = firstResult == 1 ? true : false
console.log('shortcut = ',shortcut)