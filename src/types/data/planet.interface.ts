import type { CelestialBody } from './celestial-body.interface';
import type { Moon } from './moon.interface';
import type { Orbit } from './orbit.interface';

export interface Planet extends CelestialBody {
  orbit: Orbit;
  rotation: {
    sidereal: number;
    synodic: number;
    tilt: number;
  };
  moons: Moon[];
}
