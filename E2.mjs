import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Welke maaltafel wilt u berekenen: "));
console.log("\nde maaltafel van " + getal + ":" )

for(let maaltafel = 1; maaltafel <=10; maaltafel++){
    console.log(maaltafel + " x " + maaltafel + " = " + (getal * maaltafel));
}