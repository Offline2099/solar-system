import { URL_DATA, URL_ICONS, URL_ENTITY_IMAGES } from '../constants/urls';

export const dataURL = (fileName: string): string => {
  return `${URL_DATA}${fileName}.json`;
}

export const iconURL = (iconName: string): string => {
  return `${URL_ICONS}${iconName}.svg`;
}

export const entityImageURL = (entityName: string): string => {
  return `${URL_ENTITY_IMAGES}${entityName.toLowerCase().replace(/\s/g,'-')}.webp`;
}