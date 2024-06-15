import { createInterface } from 'node:readline';
import { add, subtract, multiply, divide } from './calculator.js';

import cowSpeaker from './cowspeaker.js';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function getInputs(command) {
  console.log(`Command provided was ${command}`)
  rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {

      const a = parseInt(num1);
      const b = parseInt(num2);

      switch(command) {
        case "add":
          haveTheCowSayIt("add", a, b, add(a, b));
          break;
        case "subtract":
          haveTheCowSayIt("subtract", a, b, subtract(a, b));
          break;
        case "multiply":
          haveTheCowSayIt("multiply", a, b, multiply(a, b));
          break;
        case "divide":
          haveTheCowSayIt("divide", a, b, divide(a, b));
          break;
        default:
          console.log("Invalid command");
          break;
      }

      rl.close();
    });
  });
}

function getCommand() {
  rl.question('Command?\n', (command) => {
    getInputs(command);
  });
}

function haveTheCowSayIt(command, a, b, result) {
  const message = `The result of ${command} ${a} and ${b} is ${result}`;
  cowSpeaker.say(message);
}

export default getCommand;