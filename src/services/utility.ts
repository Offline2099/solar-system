export const nameToURL = (s: string): string => {
  return s.toLowerCase().replace(/\s/g,'-');
}