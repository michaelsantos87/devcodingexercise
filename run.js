// Convert
// $2523.04
// to "Two million five hundred twenty-three and 04/100
// dollars"

const converterService = require("./converter.service");

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const recursiveReadLine = function () {
 
  //const test = converterService.numberToWords(98.98);
  readline.question('Value $: ', answer => {
      if (answer == 'exit')
          return readline.close();
      
        if (isNaN(answer)) {
          console.log('Invalid input. Must be a number ou exit comand. Your answer was: "',answer,'"');
        } else {
          const answerAsNumber = Number(answer);
          console.log(answerAsNumber);
          const finalValue = converterService.numberToWords(answerAsNumber);
          console.log(finalValue)
      }
      console.log("")
      recursiveReadLine();
  });
};

recursiveReadLine();