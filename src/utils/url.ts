import { URL_DATA, URL_ICONS, URL_ENTITY_IMAGES } from '../constants/urls';
import { CelestialEntityType } from '../constants/celestial-entity-type';
import { ENTITY_TYPE_NAME } from '../constants/entity-type-name';

export const dataURL = (fileName: string): string => {
  return `${URL_DATA}${fileName}.json`;
};

export const iconURL = (iconName: string): string => {
  return `${URL_ICONS}${iconName}.svg`;
};

export const entityImageURL = (type: CelestialEntityType, name: string): string => {
  const fileName = name.toLowerCase().replace(/\s/g, '-');
  return `${URL_ENTITY_IMAGES}${ENTITY_TYPE_NAME[type]}s/${fileName}.webp`;
};
