// variable assignment
let var_string='string'
let var_number=5
let var_boolean=true
let var_float=0.5
console.log(typeof(var_string))
console.log(typeof(var_number))
console.log(typeof(var_boolean))
console.log(typeof(var_float))

// arithmetic operator
let a = 6
let b = 2
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

let var_array = [0,1,2,3,4,[true,false,var_number]]
for(let counter=0;counter<var_array.length;counter++){
	console.log(var_array[counter])
}

let var_object = {
	"name":"Object",
	"type":"Master",
	"grade":"A",
	"year":2010,
	"graduate":true
}
var_object.state = 'Active'

console.log(var_object['name'])
console.log(var_object.name)

let var_array_object = [{
	"name":"Boo",
	"age":24,
	"gender":false,
	"object":var_object
},{
	"name":"Doo",
	"age":24,
	"gender":true,
	"array":var_array
}]

console.log(var_array[5][3])
console.log(var_array_object[1]['array'][5][2])
console.log(var_array_object[1].array[5][2])

// Testing the difference

var old_string = 'old string from var'
console.log(old_string)

function inScope(){
	var old_string = 'old string from var in scope'
	console.log(old_string)
}

inScope()

var old_string = 'old string from var out of scope'
console.log(old_string)

let test_string = 'old string from var'
console.log(test_string)

function secondScope(){
	let test_string = 'old string from var in scope'
	console.log(test_string)
}

secondScope()

//Delete the comment on just below this line to display the error : SyntaxError: Identifier 'test_string' has already been declared
// let test_string = 'old string from var out of scope'
console.log(test_string)

const phi = 3.14
console.log(phi)

//Delete the comment on just below this line to display the error : TypeError: Assignment to constant variable
// phi = 3.1412
console.log(phi)