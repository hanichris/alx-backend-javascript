function calculateNumber(type, a, b,) {
  const [a, b] = [Math.round(a), Math.round(b)];
  let result;
  switch (type) {
    case 'SUM':
      result = a + b;
      break;
    case 'SUBTRACT':
      result = a - b;
      break;
    case 'DIVIDE':
      result = b === 0 ? 'Error': a / b;
    default:
      break;
  }
  return result;
}

module.exports = calculateNumber;
