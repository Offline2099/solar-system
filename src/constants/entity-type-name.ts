import { CelestialEntityType } from './celestial-entity-type';

export const ENTITY_TYPE_NAME: Record<CelestialEntityType, string> = {
  [CelestialEntityType.star]: 'star',
  [CelestialEntityType.region]: 'region',
  [CelestialEntityType.planet]: 'planet',
  [CelestialEntityType.moon]: 'moon',
  [CelestialEntityType.notable]: 'notable-object'
};
