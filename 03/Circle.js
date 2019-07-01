// import Shape from "./Shape.js";
const Shape = require("./Shape.js")
var circle_class = function(name,radius){
    if(name === undefined)name = 'Circle1'
    if(radius === undefined)radius = 5
    shape_class.call(name,0)
    this._radius = radius
    getRadius = function(){
        return this._radius
    }
}
class Circle extends Shape{
    constructor(name='Default Circle',radius=5){
        super(name)
        this._radius = radius
    }
    setRadius(radius){
        this._radius = radius
    }
    getRadius(){
        return this._radius
    }
    static specialCall(){
        return `This is a special call's message : "${this.staticCall()}"`
    }
}
module.exports = Circle;
// export {Circle};