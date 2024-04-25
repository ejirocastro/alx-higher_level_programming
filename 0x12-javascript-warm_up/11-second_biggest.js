#!/usr/bin/node
/* a script that searches the second biggest integer in the list of arguments */
const argumentsList = process.argv.slice(2);
const numbers = argumentsList.map(arg => parseInt(arg));
if (numbers.length < 2) {
  console.log(0);
} else {
  const sortedNumbers = numbers.sort((a, b) => b - a);
  console.log(sortedNumbers[1]);
}
