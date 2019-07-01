// filter , map , reduce , flat

const animals = [
    {name: "Fluffy", species: "cat"},
    {name: "Carlo", species: "dog"},
    {name: "Nemo", species: "fish"},
    {name: "Hamilton", species: "dog"},
    {name: "Dory", species: "fish"},
    {name: "Ursa", species: "cat"}
    ];
/* old
let fish = [];
for(let i = 0; i < animals.length; i++) {
  if (animals[i].species === 'fish') {
    fish.push(animals[i]);
  }
}
*/
/* new
let fish = animals.filter((animal) => animal.species === 'fish');
 */

let learnMap = (list) => {
    result = []
    list.map((element, index) =>{
        if(element == 'Stiletto')
            result.push('I do not like Stiletto')
        else if(index == 2)
            result.push('I like wearing Boots')
        else
            result.push(element)
    })
    return result
}
let list_shoes = ['Sneakers', 'Stiletto', 'Boots']

let mapResult = learnMap(list_shoes)
console.log(mapResult);

let learnFilter = (list) => list.filter(item => item == 'Boots')

let learnFilterInclude = (list) => list.filter(item => item.includes('e'))

let filterResult = learnFilter(list_shoes)
console.log(filterResult);

let filterResultInclue = learnFilterInclude(list_shoes)
console.log(filterResultInclue);

let orders = [
    { total: 325 },
    { total: 512},
    { total: 128},
    { total: 32 }
    ];

/*  old
    let total = 0;
    for (let i=0; i<orders.length; i++) {
      total = total + orders[i].total;
    }
    console.log(total);
*/

/* new
let total = orders.reduce((total, order) => total + order.total, 0);\
console.log(total); 
*/


