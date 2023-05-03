const { describe, it } = require('mocha');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should test successful API call', function (done) {
    getPaymentTokenFromAPI(true);
    done();
  });
  it('should test an unsuccessful API call', function (done) {
    getPaymentTokenFromAPI(false);
    done();
  });
});
