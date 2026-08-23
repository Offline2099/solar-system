import type { NumericValue } from '../types/ui/numeric-value.interface';

const MAX_DIGITS_VISIBLE = 4;

export const formatValue = (n: number): NumericValue => {
  if (n < 1000) {
    const precision = MAX_DIGITS_VISIBLE - (n >= 1 ? Math.round(n).toString().length : 0);
    return {
      mantissa: `${Number(n.toFixed(precision))}`,
      exponent: ''
    };
  }
  if (n >= 1e6) {
    const [mantissa, exponent] = n.toExponential().split('e');
    return {
      mantissa: `${Number(mantissa.slice(0, MAX_DIGITS_VISIBLE))}`,
      exponent: exponent.replace('+', '')
    };
  }
  return {
    mantissa:
      Math.round(n)
        .toString()
        .split('')
        .reverse()
        .join('')
        .match(/.{1,3}/g)
        ?.join('\u200a')
        .split('')
        .reverse()
        .join('') || '',
    exponent: ''
  };
};
