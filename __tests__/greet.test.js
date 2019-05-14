'use strict';

const greet = require('../lib/greet.js');
const faker = require('faker');


describe('greet module', () => {

  it('null for non-string values', () => {
    expect(greet(4)).toBeNull();
  });

  it('hello world', () => {
    expect(greet('world')).toEqual('hello world');
  });

  it('random name', () => {
    let randomName = faker.name.firstName();
    expect(greet(randomName)).toEqual(`hello ${randomName}`);
  });
});