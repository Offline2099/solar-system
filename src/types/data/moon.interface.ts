import { CelestialBody } from './celestial-body.interface';
import { Orbit } from './orbit.interface';

export interface Moon extends CelestialBody {
  orbit: Orbit
}