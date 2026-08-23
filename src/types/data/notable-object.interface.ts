import type { Range } from '../general/range.interface';
import type { CelestialObject } from './celestial-object.interface';
import type { Orbit } from './orbit.interface';

export interface NotableObject extends CelestialObject {
  diameter: number;
  surfaceGravity: number | Range;
  escapeVelocity: number | Range;
  orbit: Orbit;
}
