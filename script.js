function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let result ="";

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
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
	   if (num>=value-subSymbol){
		   result+=subSymbol + symbol ;
		   num-=(value -subSymbol);
	   }
	  }
	   }
	  }
	return result;
}
	  
console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
