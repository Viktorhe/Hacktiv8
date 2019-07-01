const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = function (array){
    return new Promise((resolve,reject) => {
        try{
            resolve(array.map(item => item.toUpperCase()))
        }
        catch(error){
            reject(`Error while mapping`)
        }
    })
}
const sortWords = function (array){
    return new Promise((resolve,reject) => {
        try{
            resolve(array.sort( (a,b) => a < b ))
        }
        catch(error){
            reject(`Error while sorting`)
        }
    })
}

makeAllCaps(arrayOfWords)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))

makeAllCaps(complicatedArray)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))