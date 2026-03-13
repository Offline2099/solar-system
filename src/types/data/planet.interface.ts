import { CelestialBody } from './celestial-body.interface';
import { Moon } from './moon.interface';
import { Orbit } from './orbit.interface';

export interface Planet extends CelestialBody {
  orbit: Orbit;
  rotation: {
    sidereal: number;
    synodic: number;
    tilt: number;
  },
  moons: Moon[];
}