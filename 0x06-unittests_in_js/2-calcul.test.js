const { expect } = require('chai');
const { describe, it } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM functionality', function () {
    it('correct sum when given whole integers', function () {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('correct sum when first argument has a decimal part less than .5', function () {
      expect(calculateNumber('SUM', 1.2, 3)).to.equal(4);
    });

    it('correct sum when first argument has a decimal part greater than .5', function () {
      expect(calculateNumber('SUM', 1.6, 3)).to.equal(5);
    });

    it('correct sum when second argument has a decimal part less than .5', function () {
      expect(calculateNumber('SUM', 1, 3.2)).to.equal(4);
    });

    it('correct sum when second argument has a decimal part greater than .5', function () {
      expect(calculateNumber('SUM', 1, 3.6)).to.equal(5);
    });

    it('correct sum when both arguments are decimals', function () {
      expect(calculateNumber('SUM', 1.2, 3.6)).to.equal(5);
    });
  });

  describe('SUBTRACT functionality', function () {
    it('correct subtraction when given whole integers', function () {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
  
    it('correct subtraction when first argument has a decimal part less than .5', function () {
      expect(calculateNumber('SUBTRACT', 1.2, 3)).to.equal(-2);
    });
  
    it('correct subtraction when first argument has a decimal part greater than .5', function () {
      expect(calculateNumber('SUBTRACT', 1.6, 3)).to.equal(-1);
    });
  
    it('correct subtraction when second argument has a decimal part less than .5', function () {
      expect(calculateNumber('SUBTRACT', 1, 3.2)).to.equal(-2);
    });
  
    it('correct subtraction when second argument has a decimal part greater than .5', function () {
      expect(calculateNumber('SUBTRACT', 1, 3.6)).to.equal(-3);
    });

    it('correct subtraction when both arguments are decimals', function () {
      expect(calculateNumber('SUBTRACT', 1.2, 3.6)).to.equal(-3);
    });
  });

  describe('DIVIDE functionality', function () {
    it('correct division when given whole integers', function () {
      expect(calculateNumber('DIVIDE', 1, 3)).to.equal(1 / 3);
    });
  
    it('correct division when first argument has a decimal part less than .5', function () {
      expect(calculateNumber('DIVIDE', 1.2, 3)).to.equal(1 / 3);
    });
  
    it('correct division when first argument has a decimal part greater than .5', function () {
      expect(calculateNumber('DIVIDE', 1.6, 3)).to.equal(2 / 3);
    });
  
    it('correct division when second argument has a decimal part less than .5', function () {
      expect(calculateNumber('DIVIDE', 1, 3.2)).to.equal(1 / 3);
    });
  
    it('correct division when second argument has a decimal part greater than .5', function () {
      expect(calculateNumber('DIVIDE', 1, 3.6)).to.equal(1 / 4);
    });
  
    it('correct division when both arguments are decimals', function () {
      expect(calculateNumber('DIVIDE', 1.2, 3.6)).to.equal(1 / 4);
    });

    it('correct division when second argument is 0', function () {
      expect(calculateNumber('DIVIDE', 3.4, 0.2)).to.equal('Error');
    });
  });
});
