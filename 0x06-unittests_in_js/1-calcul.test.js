const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
    it('return the sum of numbers rounded off', function () {
        assert.strictEqual(calculateNumber('SUM', 2.4, 3.6), 6);
    });

    it('return the difference of numbers rounded off', function () {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.4, 3.6), -2);
    });

    it('division of numbers rounded off', function () {
        assert.strictEqual(calculateNumber('DIVIDE', 2.4, 1.6), 1);
    });

    it('rounded b is 0', function () {
        assert.strictEqual(calculateNumber('DIVIDE', 2.4, 0.2), 'Error');
    });
});
