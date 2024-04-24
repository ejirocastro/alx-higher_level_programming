#!/usr/bin/node
/* a script that prints a square */
const size = process.argv[2];
const mySize = parseInt(size);
const x = 'X';

if (isNaN(mySize)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < mySize; i++) {
    console.log(x.repeat(mySize));
  }
}
