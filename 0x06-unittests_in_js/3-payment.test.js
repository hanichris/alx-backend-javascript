const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  var spyCalculateNumber;
  beforeEach(function () {
    spyCalculateNumber = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(function () {
    spyCalculateNumber.restore();
  });

  it('should inspect call of the Utils function', function () {
    sendPaymentRequestToApi(100, 20);
    spyCalculateNumber.calledOnceWith(100, 20);
  });

  it('should inspect the math of the Utils function', function () {
    const result = sendPaymentRequestToApi(100, 20);
    expect(result).to.equal(spyCalculateNumber.returned(120));
  });
});
