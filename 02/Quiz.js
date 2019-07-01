let add = (x,y) => x+y
let subtract = (x,y) => x-y
let multiply = (x,y) => x*y
let divide = (x,y) => x/y
let calculator = (x,sign,y) => {
    result = 0;
    switch(sign){
        case '+' : return add(x,y)
        break;
        case '-' : return subtract(x,y)
        break;
        case '*' : return multiply(x,y)
        break;
        case '/' : return divide(x,y)
        break;
    }
}
let calculate = calculator(1,'+',2)
console.log(calculate)