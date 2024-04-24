#!/usr/bin/node
/* a script that prints the first argument passed */
const argsL = process.argv[2];
if (argsL) {
  console.log(argsL);
} else {
  console.log('No argument');
}
