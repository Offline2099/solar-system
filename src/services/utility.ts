export const nameToURL = (s: string): string => {
  return s.toLowerCase().replace(/\s/g,'-');
}

export const formatNumericValue = (n: number): string => {

  if (n < 1000) {
    let precision = 4 - (n >= 1 ? Math.round(n).toString().length : 0);
    return Number(n.toFixed(precision)).toString();
  }

  if (n >= 1e6) {
    let arr = n.toExponential().split('e');
    return Number(arr[0].slice(0, 4)).toString() + ' \u22C5 10e' + arr[1].replace('+', '');
  }

  return Math.round(n).toString()
    .split('').reverse().join('')
    .match(/.{1,3}/g)?.join('\u200a')
    .split('').reverse().join('') || '';
}
