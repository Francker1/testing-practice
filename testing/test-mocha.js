//import the function circle from index.js

const { circleService } = require('./circle.js');

//import assertion from chai
const expect = require('chai').expect;

//write tests
describe('Testing Diameter, Area of circle', () => {

  it('Test 1. circle Diameter', (done) => {

    const radius = 5;
    const radiusStr = '5';

    const result = circleService.getDiameter(radius);
    const resultStr = circleService.getDiameter(radiusStr);

    expect(resultStr).to.equal('Ey, must be number');
    expect(result).to.be.a('number');
    expect(result).to.equal(10);
    done();
  });

  it('Test 2. circle Area', (done) => {

    expect(circleService.getArea(25)).to.equal(79);
    done();
  });
});
