import type { CelestialBody } from './celestial-body.interface';
import type { Orbit } from './orbit.interface';

export interface Moon extends CelestialBody {
  orbit: Orbit
}