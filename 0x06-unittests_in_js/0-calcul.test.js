import { assert } from "assert";
import { describe, it } from "mocha";
import calculateNumber from "./0-calcul";

describe('calculateNumber', function () {
  it('correct sum when given whole integers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('correct sum when first argument has a decimal part less than .5', function () {
    assert.strictEqual(calculateNumber(1.2, 3), 4);
  });

  it('correct sum when first argument has a decimal part greater than .5', function () {
    assert.strictEqual(calculateNumber(1.6, 3), 5);
  });

  it('correct sum when second argument has a decimal part less than .5', function () {
    assert.strictEqual(calculateNumber(1, 3.2), 4);
  });

  it('correct sum when second argument has a decimal part greater than .5', function () {
    assert.strictEqual(calculateNumber(1, 3.6), 5);
  });

  it('correct sum when both arguments are decimals', function () {
    assert.strictEqual(calculateNumber(1.2, 3.6), 5);
  });
});