let person = {
    name : 'Mee',
    age: 25
}

let { name, age } = person
console.log('name : ',name)
console.log('age : ',age)

const csv = "1997,Ford,F350,Must Sell!";
const [ year, make, model, description ] = csv.split(",");
console.log('year : ',year)
console.log('make : ',make)
console.log('model : ',model)
console.log('description : ',description)

const user = {
    n: 'Adi Nugroho',
    h: '@adinugroho',
    l: 'Jakarta, Indonesia'
  }
  
  // extraction
  const { n: nick, h: handle, l: location } = user;
  console.log(nick, handle, location);
