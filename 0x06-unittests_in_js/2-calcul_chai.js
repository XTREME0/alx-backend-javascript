const calculateNumber = (type, a, b) => {
  const i = Math.round(a);
  const j = Math.round(b);

  if (type === 'SUM') {
      return i + j;
  }

  if (type === 'SUBTRACT') {
      return i - j;
  }

  if (type === 'DIVIDE') {
      if (j === 0) {
          return 'Error';
      }
      return i / j;
  }
}

module.exports = calculateNumber;

