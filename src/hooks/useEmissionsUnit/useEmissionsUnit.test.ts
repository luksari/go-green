import { expect, test } from 'bun:test';
import { useEmissionUnit } from './useEmissionsUnit';

test('Transform kg to tons when >= 1000', () => {
  expect(useEmissionUnit(1000)).toBe('1.0 t');
});

test('Transform kg to tons and sets decimals ceiled', () => {
  expect(useEmissionUnit(1250)).toBe('1.3 t');
});

test('Does not transform to tons when < 1000', () => {
  expect(useEmissionUnit(650.23)).toBe('650.2 kg');
});
