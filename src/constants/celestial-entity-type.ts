export const CelestialEntityType = {
  star: 1,
  region: 2,
  planet: 3,
  moon: 4,
  notable: 5
} as const;

export type CelestialEntityType = (typeof CelestialEntityType)[keyof typeof CelestialEntityType];
