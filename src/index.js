module.exports = function toReadable (number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const scales = 'hundred';

  let str = number.toString();
  let str1 = str.slice(1, 3);
  let str1ToNum = Number(str1);

  if (number === 0) {
    return 'zero';
  }

  if (number < 20) {
   return ones[number];
  }

  if (number >= 20 && number <= 99 && str.endsWith('0')) {
    return tens[str[0]];
   }
 
   if (number >= 20 && number <= 99 && !str.endsWith('0'))
     return (tens[str[0]] + ' ' + ones[str[1]])
  
  if (number >= 100 && str.endsWith('00')) {
    return (ones[str[0]] + ' ' + scales);
  }
  
  if (str1ToNum < 20 ) {
      return (ones[str[0]] + ' ' + scales + ' ' + ones[str1ToNum]) 
     } else if (str1ToNum >= 20 && str1.endsWith('0')) {
      return (ones[str[0]] + ' ' + scales + ' ' + tens[str1[0]]) 
     } else {
      return (ones[str[0]] + ' ' + scales + ' ' + tens[str1[0]] + ' ' + ones[str1[1]]) 
     }

}
