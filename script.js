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

  // Build full list with subtractive cases from obj
  // CM = 900, CD = 400, XC = 90, XL = 40, IX = 9, IV = 4
  const values = [
    [obj[0][0], obj[0][1]], // M 1000
    [obj[2][0] + obj[0][0], 900], // CM
    [obj[1][0], obj[1][1]], // D 500
    [obj[2][0] + obj[1][0], 400], // CD
    [obj[2][0], obj[2][1]], // C 100
    [obj[4][0] + obj[2][0], 90], // XC
    [obj[3][0], obj[3][1]], // L 50
    [obj[4][0] + obj[3][0], 40], // XL
    [obj[4][0], obj[4][1]], // X 10
    [obj[6][0] + obj[4][0], 9], // IX
    [obj[5][0], obj[5][1]], // V 5
    [obj[6][0] + obj[5][0], 4], // IV
    [obj[6][0], obj[6][1]]  // I 1
  ];

  let result = '';

  for (let [symbol, value] of values) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

//console.log(convertToRoman(36)); // XXXVI
//console.log(convertToRoman(4)); // IV
//console.log(convertToRoman(9)); // IX
//console.log(convertToRoman(1994)); // MCMXCIV