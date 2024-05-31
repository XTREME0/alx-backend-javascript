export default function appendToEachArrayValue(array, appendString) {
  const nArray = array;
  for (const v in array) {
    const idx = array.indexOf(v);
    nArray[idx] = appendString + value;
  }

  return array;
}
