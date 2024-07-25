const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
    it('should return the sum of numbers rounded off', function () {
        expect(calculateNumber('SUM', 2.4, 3.6)).to.equal(6);
    });

    it('should return the difference of numbers rounded off', function () {
        expect(calculateNumber('SUBTRACT', 2.4, 3.4)).to.equal(-1);
    });

    it('should return the division of numbers rounded off', function () {
        expect(calculateNumber('DIVIDE', 2.4, 1.4)).to.equal(1);
    });

    it('should return "Error" if rounded b is 0', function () {
        expect(calculateNumber('DIVIDE', 2.4, 0.2)).to.equal('Error');
    });
});
