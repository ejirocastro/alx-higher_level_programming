#!/usr/bin/node
/* a script that prints the addition of 2 integers */
function add (a, b) {
  return a + b;
}

const args1 = parseInt(process.argv[2]);
const args2 = parseInt(process.argv[3]);
const result = add(args1, args2);
console.log(result);
