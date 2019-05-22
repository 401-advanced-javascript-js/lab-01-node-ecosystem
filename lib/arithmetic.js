'use strict';

const checkValues = require('./checkValues.js');

let arithmetic = module.exports = {};

arithmetic.add = function(a, ...args) {
  if( !checkValues('number', a, ...args) ) { return null; }
  for (let arg of args) {
    a += arg;
  }
  return a;
};

arithmetic.subtract = function(a, ...args) {
  if( !checkValues('number', a, ...args) ) { return null; }
  for (let arg of args) a -= arg;
  return a;
};

arithmetic.multiply = function(a, ...args) {
  if( !checkValues('number', a, ...args) ) { return null; }
  for (let arg of args) a *= arg;
  return a;
};

arithmetic.divide = function(a, b) {
  if( !checkValues('number', a, b) || b === 0 ) { return null; }
  return a / b;
};

