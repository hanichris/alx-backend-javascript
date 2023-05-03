const { assert } = require('chai');
const { describe, it } = require('mocha');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should test successful API call', function (done) {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        assert.deepEqual(data, { data: 'Successful response from the API' });
        done();
      });
  });
});
