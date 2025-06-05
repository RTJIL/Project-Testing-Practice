import { caesarCipher } from './caesarCipher.js';

test('caesarCipher function, check✅', () => {
  expect(typeof caesarCipher).toBe('function');
});

describe('shiftChar function', () => {
  test('shifts lowercase letters correctly', () => {
    expect(caesarCipher('a', 1)).toBe('b');
    expect(caesarCipher('z', 1)).toBe('a');  // wrap-around test
    expect(caesarCipher('m', -1)).toBe('l'); // negative shift
  });

  test('shifts uppercase letters correctly', () => {
    expect(caesarCipher('A', 1)).toBe('B');
    expect(caesarCipher('Z', 1)).toBe('A');  // wrap-around test
    expect(caesarCipher('M', -1)).toBe('L'); // negative shift
  });

  test('leaves symbols unchanged', () => {
    expect(caesarCipher('!', 5)).toBe('!');
    expect(caesarCipher(' ', 10)).toBe(' ');
    expect(caesarCipher('1', 100)).toBe('1');
  });
});

test('word shifered', () => {
  expect(caesarCipher('abcz', 1)).toBe('bcda');
});

///
