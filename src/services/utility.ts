export const constructClassName = (parts: (string | undefined)[]): string => {
  return parts.filter(part => part).join(' ').trim();
}
