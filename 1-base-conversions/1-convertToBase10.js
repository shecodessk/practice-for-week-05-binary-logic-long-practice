// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  let number;

  if(str[1] === 'b'){
    number = str.slice(2)
      return fromBinary(number) 
  }

  if(str[1] === 'x'){
    number = str.toUpperCase().slice(2)
      return fromHexaDecimal(number)
  }
}


const fromBinary = (n) =>{
  let sum = 0;

  for(let i = n.length - 1; i >= 0; i--){
      let digit = n[i];
      let index = (n.length - 1) - i;
      let binary = (2 ** index) * digit;
        sum += binary
    }
      return sum;
}

const fromHexaDecimal = (n) =>{
  const hexValues = { 0: 0, 1: 1, 2: 2, 3: 3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15}
  let sum =0;

  for(let i = n.length - 1; i >= 0; i--){
      let digit = n[i];
      let index = (n.length - 1) - i;
      let hexadecimal = (16 ** index) * hexValues[digit];
      
      sum += hexadecimal;
    }
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