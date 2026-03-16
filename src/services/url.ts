import { URL_DATA, URL_ICONS, URL_ENTITY_IMAGES } from '../constants/urls';
import { CelestialEntityType } from '../constants/data/celestial-entity-type.enum';
import { ENTITY_TYPE_NAME } from '../constants/data/entity-type-name';

export const dataURL = (fileName: string): string => {
  return `${URL_DATA}${fileName}.json`;
}

export const iconURL = (iconName: string): string => {
  return `${URL_ICONS}${iconName}.svg`;
}

export const entityImageURL = (type: CelestialEntityType, name: string): string => {
  const fileName: string = name.toLowerCase().replace(/\s/g,'-');
  return `${URL_ENTITY_IMAGES}${ENTITY_TYPE_NAME[type]}s/${fileName}.webp`;
}