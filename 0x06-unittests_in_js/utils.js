class Utils {
  calculateNumber(type, a, b) {
    [this._a, this._b] = [Math.round(a), Math.round(b)];
    let result;
    switch (type) {
      case 'SUM':
        result = this._a + this._b;
        break;
      case 'SUBTRACT':
        result = this._a - this._b;
        break;
      case 'DIVIDE':
        result = this._b === 0 ? 'Error' : this._a / this._b;
        break;
      default:
        break;
    }
    return result;
  }
}

module.exports = Utils;
