import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let hoogte = parseFloat(await userInput.question("Geef het hoogte in: "));

for(let teller = 0; teller < hoogte; teller ++){

for(let breedteller = 0; breedteller < teller; breedteller++){
    process.stdout.write("*");

}
console.log("*")
}