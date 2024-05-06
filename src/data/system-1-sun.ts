import { Star } from '../types/data';
import * as D from './text/descriptions-1-sun';

export const Sun: Star = {
  name: 'Sun',
  description: D.Sun,
  radius: 696_300,
  mass: 332_950,
  density: 1_408,
  surfaceGravity: 274,
  escapeVelocity: 617.7,
  axialRotation: {
    equator: 25.05,
    poles: 34.4
  },
  galacticOrbit: {
    radius: {
      min: 24_000,
      max: 28_000
    },
    period: {
      min: 225,
      max: 250
    },
    speed: 251
  }
}