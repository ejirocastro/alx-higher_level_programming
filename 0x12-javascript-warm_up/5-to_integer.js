#!/usr/bin/node
/* a script that prints My number: frst con in int */
const args1 = process.argv[2];
if (isNaN(parseInt(args1))) {
  console.log('Not a number');
} else {
  console.log('My number:', parseInt(args1));
}
