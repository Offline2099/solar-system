import type { CelestialObject } from './celestial-object.interface';

export interface CelestialBody extends CelestialObject {
  radius: number;
  surfaceGravity: number;
  escapeVelocity: number;
}
