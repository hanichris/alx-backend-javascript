const { assert } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let spyCalculateNumber;
  beforeEach(function () {
    spyCalculateNumber = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(function () {
    spyCalculateNumber.restore();
  });

  it('should inspect call of the Utils function', function () {
    sendPaymentRequestToApi(100, 20);
    assert.isTrue(spyCalculateNumber.calledOnceWith('SUM', 100, 20));
  });

  it('should inspect the math of the Utils function', function () {
    sendPaymentRequestToApi(100, 20);
    assert.isTrue(spyCalculateNumber.returned(120));
  });
});
