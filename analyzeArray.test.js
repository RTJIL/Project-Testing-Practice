import { analyzeArray } from './analyzeArray';

describe('analyzeArray func', () => {
  let arr = [1, 2, 3, 4, 5];

  test('average work as expected', () => {
    expect(analyzeArray(arr).average()).toBe(7.5);
  });

  test('covers both branches of min()', () => {
    const arr = [10, 5, 20]; // covers both:
    // 5 < 10 → true (min gets updated)
    // 20 < 5 → false (min stays 5)

    const stats = analyzeArray(arr);
    expect(stats.min()).toBe(5);
  });

  test('max work as expected', () => {
    expect(analyzeArray(arr).max()).toBe(5);
  });

  test('length work as expected', () => {
    expect(analyzeArray(arr).length()).toBe(5);
  });
});
