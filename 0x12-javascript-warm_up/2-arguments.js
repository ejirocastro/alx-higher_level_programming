#!/usr/bin/node
/* script that prints argument passed */
const argsL = process.argv.length;
if (argsL === 2) {
  console.log('No argument');
} else if (argsL === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
