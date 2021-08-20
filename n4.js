/* 4. Social distancing 

In OOP, create a class Distanciation to create a circle that accept one argument: the radius. Based on this radius, you should be able to create 1 method to get the area of this security circle (PI*r^2) and another one to get the perimeter (2PI*r).

Example:

const socialDistancing = new Distanciation(5);

socialDistancing.getArea(); // 78.53

socialDistancing.getPerimeter() // 31.41*/

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
