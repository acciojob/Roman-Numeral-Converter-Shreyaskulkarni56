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
  
  // 1. Convert object into an array of values using proper capitalization
  const values = Object.values(obj);

  // 2. Safely loop through the values array by index
  for (let i = 0; i < values.length; i++) {
    const [symbol, value] = values[i];

    // Handle standard addition (e.g., 30 -> XXX, 5 -> V)
    while (num >= value) {
      result += symbol;
      num -= value;
    }

    // 3. Handle subtractive cases (like 4, 9, 40, 90, 400, 900) dynamically
    // We check if subtracting a future smaller unit creates a valid prefix rule
    if (i < values.length - 1) {
      // For 'V' (5) or 'D' (500), the subtractive prefix modifier is 2 steps away ('I' or 'C')
      // For 'X' (10) or 'C' (100) or 'M' (1000), the prefix modifier is 2 steps away ('I', 'X', 'C')
      const nextIndex = (i % 2 === 0) ? i + 2 : i + 1; 
      
      if (nextIndex < values.length) {
        const [subSymbol, subValue] = values[nextIndex];
        
        // If the remaining number is greater than or equal to the subtractive boundary
        if (num >= value - subValue) {
          result += subSymbol + symbol; // e.g., 'I' + 'V' = 'IV'
          num -= (value - subValue);
        }
      }
    }
  }

  return result;
}

// Test cases
console.log(convertToRoman(36));   // Output: XXXVI
console.log(convertToRoman(4));    // Output: IV
console.log(convertToRoman(9));    // Output: IX
console.log(convertToRoman(44));   // Output: XLIV
console.log(convertToRoman(99));   // Output: XCIX

// do not edit below this line
module.exports = convertToRoman;
