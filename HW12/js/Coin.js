// Define the Coin object
class Coin{
        constructor(x, y, width, height, radius) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this.radius = radius;
        this._collected = false;
    }

    setX(x) {
        this._x = x;
    }

    setY(y) {
        this._y = y;
    }

    setWidth(width) {
        this._width = width;
    }

    setHeight(height) {
        this._height = height;
    }

    setRadius(radius){
        this.radius = radius;
    }
    setCollected(_collected) {
        this._collected = collected;
    }

    getX() {
        return this._x;
    }

    getY() {
        return this._y;
    }

    getWidth() {
        return this._width;
    }

    getHeight() {
        return this._height;
    }

    getRadius(){
        return this.radius;
    }

    isCollected() {
        return this._collected;
    }

}

