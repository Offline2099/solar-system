export const HintType = {
  definitions: 1,
  values: 2
} as const;

export type HintType = (typeof HintType)[keyof typeof HintType];
