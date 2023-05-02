const { assert } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let stubCalculateNumber,
      spyConsoleLog;
  beforeEach(function () {
    stubCalculateNumber = sinon.stub(Utils, 'calculateNumber').callsFake(() => 10);
    spyConsoleLog = sinon.spy(console, 'log');
  });

  afterEach(function () {
    stubCalculateNumber.restore();
    spyConsoleLog.restore();
  });

  it('should inspect call of expensive Utils function', function () {
    sendPaymentRequestToApi(100, 20);
    assert.isTrue(stubCalculateNumber.calledOnceWith('SUM', 100, 20));
  });

  it('should inspect the logging functionality', function () {
    sendPaymentRequestToApi(100, 20);
    assert.isTrue(spyConsoleLog.returned('The total is: 10'));
  });
});
