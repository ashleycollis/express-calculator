const { add, subtract, multiply, divide } = require('../lib/operations');

test('The add function should return 16 with 10 and 6', () => {
  expect(add(10, 6)).toBe(16);
});

test('The subtract function should return 30 with 70 and 40', () => {
  expect(subtract(70, 40)).toBe(30);
});

test('The multiply function should return 120 with 12 and 10', () => {
  expect(multiply(12, 10)).toBe(120);
});

test('The divide function should return 2 with 32 and 16', () => {
  expect(divide(32, 2)).toBe(16);
});

test('big numbers should return scientific notation', () => {
  const result = multiply(20000000000000000, 100000000000000);
  expect('' + result).toEqual(expect.stringContaining('e'));
});
