export default function cleanSet(testSet, startString) {
  if (!startString) {
    return;
  }

  const res = [];
  for (const element of testSet) {
    if(element.match(startString)){
      res.push(element.substring(startString.length));
    }
  }
  return res.join('-');
}
