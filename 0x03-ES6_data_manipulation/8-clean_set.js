export default function cleanSet(testSet, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  const res = [];
  for (const element of testSet) {
    if (element.startsWith(startString)) {
      res.push(element.substring(startString.length));
    }
  }

  return res.join('-');
}
