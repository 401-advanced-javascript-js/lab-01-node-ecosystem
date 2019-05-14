'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');

describe('adition method', () => {
  it('addition with non-number', () => {
    let a = faker.random.number();
    let b = faker.random.word();
    expect(arithmetic.add(a, b)).toBeNull();
  });

  it('addition with random numbers', () => {
    let a = faker.random.number();
    let b = faker.random.number();
    expect(arithmetic.add(a, b)).toEqual(a + b);
  });
});

describe('subtraction method', () => {
  it('subtraction with non-number', () => {
    let a = faker.random.number();
    let b = faker.random.word();
    expect(arithmetic.subtract(a, b)).toBeNull();
  });

  it('subtraction with random numbers', () => {
    let a = faker.random.number();
    let b = faker.random.number();
    expect(arithmetic.subtract(a, b)).toEqual(a - b);
  });
});

describe('multiply method', () => {
  it('multiply with non-number', () => {
    let a = faker.random.number();
    let b = faker.random.word();
    expect(arithmetic.multiply(a, b)).toBeNull();
  });

  it('multiply with random numbers', () => {
    let a = faker.random.number();
    let b = faker.random.number();
    expect(arithmetic.multiply(a, b)).toEqual(a * b);
  });
});

describe('division method', () => {
  it('divide with non-number', () => {
    let a = faker.random.number();
    let b = faker.random.word();
    expect(arithmetic.divide(a, b)).toBeNull();
  });

  it('divide by zero', () => {
    let a = faker.random.number();
    let b = 0;
    expect(arithmetic.divide(a,b)).toBeNull();
  });

  it('divide with random numbers', () => {
    let a = faker.random.number();
    let b = faker.random.number() || 1;
    expect(arithmetic.divide(a, b)).toEqual(a / b);
  });
});