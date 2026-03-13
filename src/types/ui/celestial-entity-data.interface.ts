import { CelestialEntityType } from '../../constants/data/celestial-entity-type.enum';
import { Star } from '../data/star.interface';
import { Region } from '../data/region.interface';
import { Planet } from '../data/planet.interface';
import { Moon } from '../data/moon.interface';
import { NotableObject } from '../data/notable-object.interface';

export interface CelestialEntityData {
  type: CelestialEntityType;
  entity: Star | Region | Planet | Moon | NotableObject;
};