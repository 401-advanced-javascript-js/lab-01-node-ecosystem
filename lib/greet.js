'use strict';

module.exports = (name) => {
  if (!name || (typeof name !== 'string')) return null;
  return (`hello ${name}`);
};