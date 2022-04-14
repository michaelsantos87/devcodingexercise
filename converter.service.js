var numbers = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

const converter = {
  numberToWords: (inputNumber) => {
    if (isNaN(inputNumber)) {
      return 'Invalid input. Must be a number';
    }

    if (inputNumber > 999999999.99) {
      return 'Ops... Not implemented yet. Max accepted 999999999.99';
    }

    if (inputNumber < 0) {
      return 'Ops... Just accepted positive numbers';
    }

    const integerPart = Number(inputNumber.toString().split('.')[0])
    const numerConvertedToWord = integerToWordsRecursive(integerPart);

    const firstLetterUpFrase = numerConvertedToWord.charAt(0).toUpperCase() 
      + numerConvertedToWord.slice(1)
    const formatedDecinal = formatDecimalStr(inputNumber);
    
    return firstLetterUpFrase + formatedDecinal;
  }
}   

function integerToWordsRecursive(numberToConvert){
    
    if (numberToConvert > 999999999) {
      return 'Ops... Not implemented yet';
    }

    if (numberToConvert < 0) {
      return 'Ops... Just accepted positive numbers';
    }

    if (numberToConvert % 1 > 0) {
      return 'Just accepted integer numbers';
    }

    if (numberToConvert < 20) {
      return numbers[numberToConvert];
    }

    const digit = numberToConvert % 10;
    if (numberToConvert < 100) {
      const tensPosition = Math.trunc((numberToConvert/10)-2);
      const digitName = digit ? "-" + numbers[digit]: "";
      return tens[tensPosition] + digitName;
    } 
    
    // hundred
    if (numberToConvert < 1000) {
      const numbersPosition = Math.trunc(numberToConvert / 100);
      const restOfNumber = (numberToConvert % 100 == 0 ? "" : " " + integerToWordsRecursive(numberToConvert%100));
      return numbers[numbersPosition] +" hundred" + restOfNumber;
    }

    // thousand
    if (numberToConvert < 1000000) {
      const thousandNumber = integerToWordsRecursive(~~(numberToConvert / 1000));
      const thousandRest = (numberToConvert % 1000) != 0;
      return thousandNumber + " thousand" + (thousandRest ? " " + integerToWordsRecursive(numberToConvert % 1000): "");
    }

    // million
    const millionNumber = integerToWordsRecursive(~~(numberToConvert / 1000000));
    const millionRest = (numberToConvert % 1000000) != 0;
    return millionNumber + " million" + (millionRest ? " " + integerToWordsRecursive(numberToConvert % 1000000): "");
}

function formatDecimalStr(number) {
  if (Number.isInteger(number)) {
    return number > 1 ? ' dollars' : ' dollar';
  }
  return " and " + number.toString().split('.')[1].padEnd(2, '0') + "/100 dollars";
}

module.exports = converter;