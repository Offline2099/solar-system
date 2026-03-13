import { Range } from '../general/range.interface';
import { CelestialBody } from './celestial-body.interface';
import { Orbit } from './orbit.interface';

type Difference = 'radius' | 'surfaceGravity' | 'escapeVelocity';

export interface NotableObject extends Omit<CelestialBody, Difference> {
  diameter: number;
  surfaceGravity: number | Range;
  escapeVelocity: number | Range;
  orbit: Orbit;
}