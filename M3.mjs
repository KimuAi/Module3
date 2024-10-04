import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal = parseFloat(await userInput.question("Geef mij een getal: "));

if(getal % 2 == 1)
{
    console.log("Het getal " + getal + " is een priemgetal!");
}
else
{
    console.log("Het getal " + getal + " is geen priemgetal!");
}
