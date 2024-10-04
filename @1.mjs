import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Tot welk getal wilt u stoppen "));

let a = 0, b = 1;

console.log(a); 
while (b <= getal) { 
    console.log(b); 
    let c = a + b; 
    a = b;
    b = c;
}