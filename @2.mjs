import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question("Geef me uw eerste getal:  "));
let getal2 = parseFloat(await userInput.question("Geef me uw tweede getal:  "));

while (getal2 !== 0) {
    let deler = getal1 % getal2;
    getal1 = getal2;
    getal2 = deler;

} 
console.log("De grootste gemeenschappelijke deler is " + getal1)