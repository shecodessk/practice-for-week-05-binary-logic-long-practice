// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  let number;
  let index;
  let binary;
  let hexadecimal
  let sum = 0;

  const hexValues = { 0: 0, 1: 1, 2: 2, 3: 3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15}

  if(str[1] === 'b'){
    number = str.slice(2)
    for(let i = number.length - 1; i >= 0; i--){
      let digit = number[i];
      index = (number.length - 1) - i;
      binary = (2 ** index) * digit;
      sum += binary
    }
  }


  if(str[1] === 'x'){
    number = str.toUpperCase().slice(2)
    for(let i = number.length - 1; i >= 0; i--){
      let digit = number[i];
      
      index = (number.length - 1) - i;
      hexadecimal = (16 ** index) * hexValues[digit];
      sum += hexadecimal;

    }
  };
  return sum
}

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914