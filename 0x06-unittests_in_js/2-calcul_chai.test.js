const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('summing 1.7 and 3.2', () => {
      expect(calculateNumber('SUM', 1.7, 3.2)).to.equal(5);
    });

    it('summing -1.2 and -2.7', () => {
      expect(calculateNumber('SUM', -1.2, -2.7)).to.equal(-4);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('ubtracting 2.5 from 2.5', () => {
      expect(calculateNumber('SUBTRACT', 2.5, 2.5)).to.equal(0);
    });

    it('subtracting 1.1 from 5.0', () => {
      expect(calculateNumber('SUBTRACT', 1.1, 5.0)).to.equal(-4);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('dividing 4.5 by 2.0', () => {
      expect(calculateNumber('DIVIDE', 4.3, 2.0)).to.equal(2);
    });

    it('dividing -7.2 by 2.0', () => {
      expect(calculateNumber('DIVIDE', -7.2, 2.0)).to.equal(-3.5);
    });

    it('Error when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
    });

    it('Error when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0.3)).to.equal('Error');
    });
  });
});
