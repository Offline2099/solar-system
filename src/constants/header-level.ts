export const HeaderLevel = {
  secondary: 2,
  tertiary: 3
} as const;

export type HeaderLevel = (typeof HeaderLevel)[keyof typeof HeaderLevel];
