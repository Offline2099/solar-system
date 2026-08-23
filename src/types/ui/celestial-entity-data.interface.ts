import { CelestialEntityType } from '../../constants/celestial-entity-type';
import type { Star } from '../data/star.interface';
import type { Region } from '../data/region.interface';
import type { Planet } from '../data/planet.interface';
import type { Moon } from '../data/moon.interface';
import type { NotableObject } from '../data/notable-object.interface';

export interface CelestialEntityData {
  type: CelestialEntityType;
  entity: Star | Region | Planet | Moon | NotableObject;
}
