import type { CelestialBody } from './celestial-body.interface';
import type { Range } from '../general/range.interface';

export interface Star extends CelestialBody {
  axialRotation: {
    equator: number;
    poles: number;
  };
  galacticOrbit: {
    radius: Range;
    period: Range;
    speed: number;
  };
}
