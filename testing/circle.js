// //implement the class
// class Circle {

//   //create the constructor
//   constructor(radius, squareR) {
//     this.radius = radius;
//   };

//   //create the methods to calculate the diameter and area of circle
//   getDiameter() {

//     return this.radius * 2;
//   };

//   getArea() {

//     return Math.round(Math.PI * this.radius);
//   };
// }


const circleService = {

  getDiameter: (radius) => {

    if (typeof radius !== 'number') {
      return 'Ey, must be number';
    }

    return radius * 2
  },
  getArea: (radius) => Math.round(Math.PI * radius),
}

module.exports = {

  circleService
}