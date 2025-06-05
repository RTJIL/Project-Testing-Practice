import { calc } from './calculator.js';

test('calcultor, check✅', () => {
  expect(calc).toMatchObject;
});

test('add func, check✅', () => {
  expect(typeof calc.add).toBe('function');
});

test('subtract, check✅', () => {
  expect(typeof calc.subtract).toBe('function');
});

test('divide, check✅', () => {
  expect(typeof calc.divide).toBe('function');
});

test('multiply, check✅', () => {
  expect(typeof calc.multiply).toBe('function');
});

///

test('add two numbers, check✅', () => {
  expect(calc.add(1, 2)).toBe(3);
});

test('subtract two numbers, check✅', () => {
  expect(calc.subtract(1, 2)).toBe(-1);
});

test('divide two numbers, check✅', () => {
  expect(calc.divide(1, 2)).toBe(0.5);
});

test('multiply two numbers, check✅', () => {
  expect(calc.multiply(1, 2)).toBe(2);
});
