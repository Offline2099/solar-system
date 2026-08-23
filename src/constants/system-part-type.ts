export const SystemPartType = {
  star: 1,
  planetGroup: 2,
  region: 3
} as const;

export type SystemPartType = (typeof SystemPartType)[keyof typeof SystemPartType];
