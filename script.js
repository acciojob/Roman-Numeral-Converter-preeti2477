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

  // Input range check
  if (typeof num !== 'number' || num < 1 || num > 3999 || !Number.isInteger(num)) {
    return "Please enter a number between 1 and 3999";
  }

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
    [obj[6][0], obj[6][1]] // I 1
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

// Call function and display result in HTML
document.addEventListener('DOMContentLoaded', () => {
  const result14 = convertToRoman(14); // XIV
  const result798 = convertToRoman(798); // DCCXCVIII

  console.log(convertToRoman(14));
  console.log(convertToRoman(798));

  // Show in HTML
  const output = document.getElementById('result');
  if (output) {
    output.innerHTML = `14 = ${result14}<br>798 = ${result798}`;
  }

  // If separate elements exist
  const el14 = document.getElementById('result-14');
  if (el14) el14.textContent = result14;

  const el798 = document.getElementById('result-798');
  if (el798) el798.textContent = result798;
});

// do not edit below this line
module.exports = convertToRoman