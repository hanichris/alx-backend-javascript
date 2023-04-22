function calculateNumber(type, a, b) {
  const [_a, _b] = [Math.round(a), Math.round(b)];
  let result;
  switch (type) {
    case 'SUM':
      result = _a + _b;
      break;
    case 'SUBTRACT':
      result = _a - _b;
      break;
    case 'DIVIDE':
      result = _b === 0 ? 'Error' : _a / _b;
      break;
  }
  return result;
}

module.exports = calculateNumber;
