// Old class
// var shape_class = function(name,edges){
//     if(name === undefined)name = 'Shapeless'
//     if(edges === undefined)edges = 0
//     this._name = name
//     this._edges = edges
//     getName = function(){
//         return this._name
//     }
// }
// var circle_class = function(name,radius){
//     if(name === undefined)name = 'Circle1'
//     if(radius === undefined)radius = 5
//     shape_class.call(name,0)
//     this._radius = radius
//     getRadius = function(){
//         return this._radius
//     }
// }

// var old_circle = new circle_class('Circle1',5)
// console.log(old_circle);

// // New Class
// class Shape{
//     constructor(name=`Default shapeless`,edges=0){
//         this._name = name
//         this._edges = edges
//     }
//     /**
//      * @param {string} name
//      */
//     setName(name){
//         this._name = name
//     }
//     getName(){
//         return this._name
//     }
//     setEdges(edges){
//         this._edges = edges
//     }
//     getEdges(){
//         return this._edges
//     }
//     static staticCall(){
//         return `This is a call from statice method in Shape Class`
//     }
// }
// class Circle extends Shape{
//     constructor(name='Default Circle',radius=5){
//         super(name)
//         this._radius = radius
//     }
//     setRadius(radius){
//         this._radius = radius
//     }
//     getRadius(){
//         return this._radius
//     }
//     static specialCall(){
//         return `This is a special call's message : "${this.staticCall()}"`
//     }
// }
// weirdCircle = Circle
// console.log(weirdCircle.staticCall());
// console.log(weirdCircle.specialCall());
// console.log(newCircle.staticCall());
// console.log(newCircle.specialCall());
// import Shape from "./Shape.js";
// import Circle from "./Circle.js";
const Circle = require('./Circle.js')

let newCircle = new Circle()
console.log(newCircle.getName());
console.log(newCircle.getEdges());
// console.log(newCircle.staticCall());
// console.log(newCircle.specialCall());
