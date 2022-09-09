const dateLibrary = require('../src/index.js');

// format('Y-M-D h:I:S')
const date = new dateLibrary('nov 6 1997 3:04:05');


test('returns full year', () => {
  expect(date.year).toBe(1997)
});

test('returns short year', () => {
  expect(date.yr).toBe('97')
});

test('returns full month', () => {
  expect(date.month).toBe('November')
});

test('returns short month', () => {
  expect(date.mon).toBe('Nov')
});

test('returns full day', () => {
  expect(date.day).toBe('Thursday')
});

test('returns short day', () => {
  expect(date.dy).toBe('Thu')
});

test('returns date number', () => {
  expect(date.date).toBe(6)
});

test('returns hour', () => {
  expect(date.hours).toBe(3)
});

test('returns minutes', () => {
  expect(date.mins).toBe(4)
});

test('returns seconds', () => {
  expect(date.secs).toBe(5)
});

test('format Y M D', () => {
  expect(date.format('Y M D')).toBe('1997 November 06')
});

test('format y/m/d', () => {
  expect(date.format('y/m/d')).toBe('97/Nov/6')
});