export default function hasValuesFromArray(testSet, testArr) {
  for (const element of testArr) {
    if (!testSet.has(element)) {
      return false;
    }
  }

  return true;
}
