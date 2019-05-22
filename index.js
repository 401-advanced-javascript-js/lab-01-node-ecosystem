'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');

console.log(greet('JOHN'));

console.log(`${math.add(1,3)} === 4`);
console.log(`${math.add(1,3,4,2,1)} === 11`);
console.log(`${math.subtract(1,3,1,4,5)} === -12`); 

console.log(`${math.multiply(1,3)} === 3`);
console.log(`${math.divide(6,3)} === 2`); 