function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let result = "";
  const values = Object.values(obj);

  for (let i = 0; i < values.length; i++) {
    const [symbol, value] = values[i];

    if (i < values.length - 1) {
      const nextIndex = (i % 2 === 0) ? i + 2 : i + 1;

      if (nextIndex < values.length) {
        const [subSymbol, subValue] = values[nextIndex];

        if (num >= value - subValue) {
          result += subSymbol + symbol;
          num -= value - subValue;
          continue;
        }
      }
    }

    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

console.log(convertToRoman(36));
// do not edit below this line
module.exports = convertToRoman