const { assert } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let spyConsoleLog;
  beforeEach(function () {
    spyConsoleLog = sinon.spy(console, 'log');
  });

  afterEach(function () {
    spyConsoleLog.restore();
  });

  it("should ensure logging is done once with arguments 'The total is: 120'", function () {
    sendPaymentRequestToApi(100, 20);
    assert.isTrue(spyConsoleLog.calledWith('The total is: 120'));
    assert(spyConsoleLog.callCount === 1, 'console.log is called once');
  });

  it("should ensure logging is done once with arguments 'The total is: 20'", function () {
    sendPaymentRequestToApi(10, 10);
    assert.isTrue(spyConsoleLog.calledWith('The total is: 20'));
    assert.isTrue(spyConsoleLog.calledOnce);
  });
});
