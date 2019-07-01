function oldFunction(label){
    return 'this is a sample of '+label+' Function'
}
const arrowFunction = (label) => `This is a sample of ${label} Function`


console.log(oldFunction('Old'))
console.log(arrowFunction('Arrow'))

/*old
setInterval(printTick, 1000);

const printTick = () => {
  console.log("Tick");
}
*/
/* current
setInterval(() => {
    console.log("Tick");
  }, 1000);
  */