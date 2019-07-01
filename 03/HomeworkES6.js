class Shape{
    constructor(Id,x,y){
        this._Id = Id
        this._x = x
        this._y = y
    }
    setId(Id){this._Id = Id}
    setX(x){this._x = x}
    setY(y){this._y = y}
    getId(){return this._Id;}
    getX(){return this._x}
    getY(){return this._y}

    move(x, y = 0){
        this.setX(x)
        this.setY(y)
    }
}
class Rectangle extends Shape{
    constructor(Id, x, y, width, height){
        super(Id, x, y)
        this._width = width
        this._height = height
    }
    setWidth(width){this._width = width}
    setHeight(height){this._height = height}
    getWidth(){return this._width}
    getHeight(){return this._height}
}
class Circle extends Shape{
    constructor(Id, x, y, radius){
        super(Id, x, y)
        this._radius = radius
    }
    setRadius(radius){this._radius = radius}
    getRadius(){return this._radius}
}
class Eye extends Circle{
    constructor(Id, x, y, radius, color){
        super(Id, x, y, radius)
        this._color = color
    }
    setColor(color){this._color = color}
    getColor(){return this._color}
    roll(rollAmount){this.move(rollAmount )}
}
let blueEyes = new Eye(123,0,0,5,'Blue')
blueEyes.roll(5)
console.log(blueEyes);
