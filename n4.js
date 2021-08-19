// 4. Social distancing

class Distanciation {
    constructor(radius) {
        this._radius = radius;
        this._pi = 3.1415;
    }
    getArea() {
        return this._pi * this._radius**2;
    }
    getPerimeter() {
        return 2 * this._pi * this._radius;
    }
};
const socialDistancing = new Distanciation(5);
console.log(socialDistancing.getArea()); // 78.53
console.log(socialDistancing.getPerimeter()); // 31.41
