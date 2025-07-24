module.exports = function reverse(n) {
  const nAsString = String(n);
  let i = 0;
  let result = '';
  for (i; i < nAsString.length; i += 1) {
    result = nAsString[i] + result;
  }
  if (result[result.length - 1] === '-') {
    result = result.slice(0, -1);
  }
  return result;
};
