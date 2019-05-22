'use strict';

module.exports = (type, ...args) => {
  for(let arg of args) {
    if (typeof arg !== type) return false;
  }
  return true;
};