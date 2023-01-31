export default function cleanSet(testSet, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  const res = [];
  for (const element of testSet) {
    if ( typeof element === 'string' && element.startsWith(startString)) {
      res.push(element.substring(startString.length));
    }
  }

  return res.join('-');
}
