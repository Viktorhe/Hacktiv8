// Old class
var shape_class = function(name,edges){
    if(name === undefined)name = 'Shapeless'
    if(edges === undefined)edges = 0
    this._name = name
    this._edges = edges
    getName = function(){
        return this._name
    }
}
// New Class
class Shape{
    constructor(name=`Default shapeless`,edges=0){
        this._name = name
        this._edges = edges
    }
    /**
     * @param {string} name
     */
    setName(name){
        this._name = name
    }
    getName(){
        return this._name
    }
    setEdges(edges){
        this._edges = edges
    }
    getEdges(){
        return this._edges
    }
    static staticCall(){
        return `This is a call from statice method in Shape Class`
    }
}
module.exports = Shape;
// export default Shape;