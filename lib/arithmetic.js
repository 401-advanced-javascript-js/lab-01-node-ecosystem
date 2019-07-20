'use strict';

let arithmetic = module.exports = {};

// TODO: refactor to allow for an array of params
arithmetic.add = function(a, b) {
  if( !isNumber(a) || !isNumber(b) ) { return null; }
  return a + b;
};

// TODO: refactor to allow for an array of params
arithmetic.subtract = function(a, b) {
  if( !isNumber(a) || !isNumber(b) ) { return null; }
  return a - b;
};

// TODO: refactor to allow for an array of params
arithmetic.multiply = function(a, b) {
  if( !isNumber(a) || !isNumber(b) ) { return null; }
  return a * b;
};

arithmetic.divide = function(a, b) {
  if( !isNumber(a) || !isNumber(b) || b === 0 ) { return null; }
  return a / b;
};

const isNumber = (num) => typeof num === 'number';

// TODO: externalize argument validation
